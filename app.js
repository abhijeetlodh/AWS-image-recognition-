require('dotenv').config();
const express = require('express');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const app = express();

// configure AWS SDK
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// create S3 instance
const s3 = new aws.S3();

// configure multer middleware to upload files to S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname);
    }
  })
});

// configure express app
app.set('view engine', 'ejs');
app.use(express.static('public'));

// define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('image'), (req, res) => {
  const rekognition = new aws.Rekognition();
  const params = {
    Image: {
      S3Object: {
        Bucket: process.env.S3_BUCKET_NAME,
        Name: req.file.key
      }
    },
    MaxLabels: 10,
    MinConfidence: 80
  };
  rekognition.detectLabels(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      res.status(500).send(err.message);
    } else {
      console.log(data);
      res.send(data.Labels);
    }
  });
});

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
