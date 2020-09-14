const express = require('express');
const tablesRouter = express.Router();
const base=require('../dbBase');
const app = require('../../server');

const AWS = require("aws-sdk");
AWS.config.update({
    region: "us-west-2",
    endpoint: base
  });
  
  const dynamodb = new AWS.DynamoDB();
  const docClient= new AWS.DynamoDB.DocumentClient();
  let params;
  
tablesRouter.get('/',async(req,res)=>{
    params = {
        TableName : "Tables"
        }    

    try{
        const tables=await docClient.scan(params).promise();
        res.json(tables.Items);
    }catch(err){
        console.log(err);
        res.sendStatus(400);
    }
})


module.exports = tablesRouter;
