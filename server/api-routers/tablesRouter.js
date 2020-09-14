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

tablesRouter.get('/:tableId',async(req,res)=>{
    params={
        TableName: 'Tables',
        KeyConditionExpression: 'id=:id',
        ExpressionAttributeValues:{
            ':id': Number(req.params.tableId)
        }
    }
    try{
        const table=await docClient.query(params).promise();
        if(table.Count===0)
            throw(new Error('Not Found'))
        console.log(table.Items);
        res.json(table.Items);
    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }
})

tablesRouter.post('/:tableId/',async(req,res)=>{
    params={
        TableName='Tables',
        Item:{
            
        }
    }
})


module.exports = tablesRouter;
