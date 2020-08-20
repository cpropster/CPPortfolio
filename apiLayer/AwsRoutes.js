const express = require("express");
const AWS = require("aws-sdk");

const AWSRouter = express.Router();

AWS.config.update({ region: "ap-northeast-1" });

const params = {
  InstanceIds: [
    /* required */
    "i-0eb0f3842e772692b",
    /* more items */
  ],
  DryRun: false,
};
const ec2 = new AWS.EC2({ apiVersion: "2016-11-15" });

ec2.describeInstances(params, function (err, data) {
  if (err) {
    console.log("Error", err.stack);
  } else {
    console.log("Success", JSON.stringify(data));
  }
});

// ec2.startInstances(params, function (err, data) {
//   if (err) console.log(err, err.stack);
//   // an error occurred
//   else console.log(data); // successful response
// });

// ec2.stopInstances(params, function (err, data) {
//   if (err) console.log(err, err.stack);
//   // an error occurred
//   else console.log(data); // successful response
// });

module.exports = AWSRouter;
