/**
 * Lib
 */

/* Init DynamoDB stuff */
var AWS = require('aws-sdk');
var Saws = new require('saws')(AWS);

AWS.config.update({region:'eu-west-1'});
Saws.stage = process.env.SERVERLESS_STAGE;
var RESOURCES_PARAMS = {
  TableName: "resources",
  KeySchema: [
    {AttributeName: 'Name', KeyType: 'HASH'},
  ],
  AttributeDefinitions: [
    {AttributeName: 'Name', AttributeType: 'S'}
  ],
  ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
};

module.exports.resources = new Saws.Table(RESOURCES_PARAMS);

module.exports.respond = function(event, cb) {

  var response = {
    message: "Your Serverless function ran successfully!"
  };

  return cb(null, response);
};
