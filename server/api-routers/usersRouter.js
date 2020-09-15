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
let usersId=3;

usersRouter.get('/:userId',async(req,res)=>{
    params={
        TableName:'Users',
        Key:{
            "id":Number(req.params.userId)
        }
    }
    try{
        const user=await docClient.get(params).promise();
        if(user.Count===0)
            throw(new Error('Not Found'))
        res.json(user.Item);
        console.log(user.Item);
    }catch(err){
        res.sendStatus(400);
        console.log(err.message);
    }
})

usersRouter.put('/:userId',async(req,res)=>{
    if(req.query.rented)
        params={
            TableName: 'Users',
            Key:{
                "id":Number(req.params.userId)
            },
            UpdateExpression:'set tableId=:id',
            ExpressionAttributeValues: {
                ":id": Number(req.query.tableId)
            },
            ReturnValues:"UPDATED_NEW"
        }    
    try{
        const user= await docClient.update(params).promise();
        res.json(user);
    }catch(err){
        console.log(err)
        res.sendStatus(400);
    }
})




module.exports = usersRouter;
