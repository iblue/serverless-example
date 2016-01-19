/**
 * Lib
 */

/* Init DynamoDB stuff */
var AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-1'});

module.exports.docClient = new AWS.DynamoDB.DocumentClient();

module.exports.respond = function(event, cb) {

  var response = {
    message: "Your Serverless function ran successfully!"
  };

  return cb(null, response);
};
