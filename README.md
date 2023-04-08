# AWS-image-recognition-
AWS Image Recognition: A Node.js app using Amazon Rekognition to detect objects, scenes, and faces in images uploaded to S3 bucket. Built with Express, Multer &amp; EJS

# Overview 
A Node.js app that uses Amazon Rekognition to perform image recognition tasks on images stored in an S3 bucket. The app can detect objects, scenes, and faces in the images and return metadata.

# Features
Upload images to an S3 bucket
Detect objects, scenes, and faces using Amazon Rekognition
Display detected labels
Built with Express, Multer, and EJS
# Usage</span>
Clone the repository: git clone https://github.com/abhijeetlodh/AWS-image-recognition-.git
Install dependencies: npm install
Set environment variables in .env file (see .env.example)
Start the server: npm start

# Usage

Once the server is running, you can navigate to the homepage and upload an image. The app will send the image to the S3 bucket and pass its location to Amazon Rekognition for processing. The detected labels are then returned to the user and displayed on the page.


# Limitations
The app only detects objects, scenes, and faces in the images, and does not provide advanced image recognition features like facial recognition or emotion detection. Additionally, the accuracy of the detected labels may be limited, especially for complex images.



# Future Improvements
Potential areas for improvement include adding more advanced image recognition features, improving the accuracy of the detected labels, and providing a more user-friendly interface for displaying the results. Additionally, there may be opportunities to optimize the app's performance and scalability by leveraging AWS services such as Lambda and API Gateway.


# Author
Abhijeet Lodh

# License
This project is licensed under the MIT License - see the LICENSE file for details.
