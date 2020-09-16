const express = require('express');
const tablesRouter = express.Router();
const app = require('../../app');

const AWS = require("aws-sdk");
  
  const docClient= new AWS.DynamoDB.DocumentClient();
  let params;
  let tablesId=3;
  
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

tablesRouter.post('/',async(req,res)=>{
    params={
        TableName: 'Tables',
        Item:{ ...req.body.table, id:++tablesId}
    }
    try{
        const table=await docClient.put(params).promise();
        console.log(table);
        table.id=tablesId
        res.json(table);
    }catch(err){
        console.log(err)
        res.sendStatus(400);
    }
});



module.exports = tablesRouter;
