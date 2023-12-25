 'use strict';
 
 const AWS = require('aws-sdk');
 const sqs = new AWS.SQS();
 
 exports.handler = async (event) => {
     const orderData = event.Records[0].body;
 
     console.log(`Processing order: ${orderData}`);

     let order;
     try {
        order = JSON.parse(orderData);
     } catch (err) {
        console.error(`Error parsing order: ${orderData}`);
        return false;
     }

     // todo: faire votre traitement
 
     return true;
 };
