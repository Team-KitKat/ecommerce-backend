require('dotenv').config(); // Loading dotenv to have access to env variables
import AWS from 'aws-sdk'; // Requiring AWS SDK.

// Configuring AWS
AWS.config = new AWS.Config({
    accessKeyId:'AKIAZ4EXINWNVESDMQGU',//process.env.S3_KEY, // stored in the .env file
    secretAccessKey: '2Q2Ua2R0el3xhfnhNO9wOxcAkYqiXb5RYKb1pLQN',//process.env.S3_SECRET, // stored in the .env file
    region: 'us-east-1'//process.env.BUCKET_REGION // This refers to your bucket configuration.
});

// Creating a S3 instance
const s3 = new AWS.S3();

// Retrieving the bucket name from env variable
const Bucket = 'image-store-manakal'//process.env.BUCKET_NAME;

// In order to create pre-signed GET adn PUT URLs we use the AWS SDK s3.getSignedUrl method.
// getSignedUrl(operation, params, callback) ⇒ String
// For more information check the AWS documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html

// GET URL Generator
function generateGetUrl(Key:String) {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket,
            Key,
            Expires: 120 // 2 minutes
        };
        // Note operation in this case is getObject
        s3.getSignedUrl('getObject', params, (err, url) => {
            if (err) {
                reject(err);
            } else {
                // If there is no errors we will send back the pre-signed GET URL
                resolve(url);
            }
        });
    });
}

// PUT URL Generator
function generatePutUrl(Key:String, ContentType:String) {
    console.log('putURL called');
    return new Promise((resolve, reject) => {
        console.log('inside promise');
        // Note Bucket is retrieved from the env variable above.
        const params = { Bucket, Key, ContentType };
        // Note operation in this case is putObject
        s3.getSignedUrl('putObject', params, function(err, url) {
            if (err) {
                reject(err);
            }
            console.log('inside getSignedUrl');
            // If there is no errors we can send back the pre-signed PUT URL
            resolve(url);
        });
    });
}

// Finally, we export the methods so we can use it in our main application.
module.exports = { generateGetUrl, generatePutUrl };