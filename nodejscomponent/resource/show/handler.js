'use strict';

/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */

// Require Serverless ENV vars
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Require Logic
var lib = require('../../lib');

// Lambda Handler
module.exports.handler = function(event, context) {
  var params = {
    TableName: "resources",
    KeyConditionExpression: "#name = :name",
    ExpressionAttributeNames: {
      "#name": "Name"
    },
    ExpressionAttributeValues: {
      ":name": event["name"]
    }
  };

  lib.docClient.query(params, function(error, data) {
    return context.done(error, data);
  });
};
