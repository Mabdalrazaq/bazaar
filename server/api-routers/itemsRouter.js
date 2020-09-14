const express = require('express');
const itemsRouter= express.Router();
const base=require('../dbBase');
const app = require('../../server');

const AWS = require("aws-sdk");
AWS.config.update({
    region: "us-west-2",
    endpoint: base
  });
  
const dynamodb = new AWS.DynamoDB();
const docClient= new AWS.DynamoDB.DocumentClient();
let id=20;
let params;

itemsRouter.get('/',async(req,res)=>{
    params = {
        TableName : "Items"
        }    

    try{
        const items=await docClient.scan(params).promise();
        res.json(items.Items);
    }catch(err){
        console.log(err);
        res.sendStatus(400);
    }
});

itemsRouter.post('/',async(req,res)=>{
    params={
        TableName: 'Items',
        Item:{ ...req.body.item, id:++id}
    }
    try{
        const item=await docClient.put(params).promise();
        console.log(item);
        res.json(item);
    }catch(err){
        console.log(err)
        res.sendStatus(400);
    }
});

itemsRouter.put('/:itemId',async(req,res)=>{
    params={
        TableName: 'Items',
        Key:{
            "id":Number(req.params.itemId)
        },
        UpdateExpression:'set price=:p, #nm=:n',
        ExpressionAttributeNames:{
            '#nm': 'name'
        },
        ExpressionAttributeValues: {
            ":p": req.body.price,
            ":n": req.body.name
        },
        ReturnValues:"UPDATED_NEW"
    }
    try{
        const item= await docClient.update(params).promise();
        console.log(item)
        res.json(item);
    }catch(err){
        console.log(err)
        res.sendStatus(400);
    }
})

// id:9,
// tableId:2,
// name: 'Handmade Clock',
// price: 10,
// image: '/images/clock.jpg',
// description: 'A clock that was made before my father, it is hand made and unique',
// available: true


module.exports = itemsRouter;