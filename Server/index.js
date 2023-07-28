const express = require('express');
const aws = require('aws-sdk');

const app = express();

app.listen(6666,()=>{
    console.log('server is listening on port 6666')
})



// set up the aws credentials and region
aws.config.update({
 accessKeyId : "AKIA4DQHVYUIEKIIXBMT",
 secretAccessKey : "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",
 region : "ap-south-1",
})


// creating s3 instance 

const s3 = new aws.S3();


// define bucket name and file details

const bucketName = "myfirstbucketsachin96";
const fileName = 'First_File.txt';
const fileContent = "Hello , inside first s3 bucket hello";

// create a new s3 bucket 

// const bucketParams = {
//     Bucket : bucketName 
// }

// s3.createBucket(bucketParams, (err, data)=>{
   
//     if(err){
//         console.log('error creating bucket', err);
//     }else{
//         console.log('bucket created successfully', data)

       
//     }

 // upload afile to the bucket

 const uploadParams = {
    Bucket : bucketName,
    Key : fileName,
    Body : fileContent,

}

s3.upload(uploadParams ,(err , data)=>{
    if (err) {
        console.log('Error uploading file:', err);
      } else {
        console.log('File uploaded successfully:', data.Location);
      }
})







