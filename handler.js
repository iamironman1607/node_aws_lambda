const awsServelessExpress = require('aws-serverless-express');
const app = require('./src/app');

const server = awsServelessExpress.createServer(app);

exports.handler = (event, context)=>{
  return awsServelessExpress.proxy(server, event, context);
}