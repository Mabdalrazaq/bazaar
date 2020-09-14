const express = require('express');
const usersRouter = express.Router();
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

usersRouter.get('/:userId',async(req,res)=>{
    params={
        TableName:'Users',
        KeyConditionExpression:'id=:id',
        ExpressionAttributeValues:{
            ':id':Number(req.params.userId)
        }
    }
    try{
        const user=await docClient.query(params).promise();
        if(user.Count===0)
            throw(new Error('Not Found'))
        res.json(user,Items);
    }catch(err){
        res.sendStatus(400);
        console.log(err.message);
    }
})

module.exports = usersRouter;
