db = require('./fakeDB');

const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const dynamodb = new AWS.DynamoDB();
const docClient= new AWS.DynamoDB.DocumentClient();

const seedData=async()=>{
    let params={
        TableName: 'Tables'
    }  

    try{
        let data= await dynamodb.deleteTable(params).promise() 
    }catch(err){
        console.log(err.message);
    }

    params={
        TableName: 'Users'
    }

    try{
        data= await dynamodb.deleteTable(params).promise() 
    }catch(err){
        console.log(err.message);
    }

    params={
        TableName: 'Items'
    }

    try{
        data= await dynamodb.deleteTable(params).promise() 
    }catch(err){
        console.log(err.message);
    }


    params = {
        TableName : "Tables",
        KeySchema: [       
            { AttributeName: "id", KeyType: "HASH"}
        ],
        AttributeDefinitions: [       
            { AttributeName: "id", AttributeType: "N" },
        ],
        ProvisionedThroughput: {       
            ReadCapacityUnits: 10, 
            WriteCapacityUnits: 10
        }
    };


    try{
        data= await dynamodb.createTable(params).promise() 
    }catch(err){
        console.log(err.message);
    }

    params = {
        TableName : "Users",
        KeySchema: [       
            { AttributeName: "id", KeyType: "HASH"}
        ],
        AttributeDefinitions: [       
            { AttributeName: "id", AttributeType: "N" },
        ],
        ProvisionedThroughput: {       
            ReadCapacityUnits: 10, 
            WriteCapacityUnits: 10
        }
    };

    try{
        data= await dynamodb.createTable(params).promise() 
    }catch(err){
        console.log(err.message);
    }

    params = {
        TableName : "Items",
        KeySchema: [       
            { AttributeName: "id", KeyType: "HASH"},
        ],
        AttributeDefinitions: [       
            { AttributeName: "id", AttributeType: "N" },
        ],
        ProvisionedThroughput: {       
            ReadCapacityUnits: 10, 
            WriteCapacityUnits: 10
        }
    };

    try{
        data= await dynamodb.createTable(params).promise() 
    }catch(err){
        console.log(err.message);
    }

    await new Promise((resolve,reject)=>{
        db.usersDB.forEach(async user=>{
            params={
                TableName: 'Users',
                Item:{
                    ...user
                }
            }
            try{
                data=await docClient.put(params).promise()
                resolve(data)
                console.log(`user ${user.name} added`)
            }catch(err){
                console.log(err);
                reject(err);
            }
        });
    })


    await new Promise((resolve,reject)=>{
        db.tablesDB.forEach(async table=>{
            params={
                TableName: 'Tables',
                Item:{
                    ...table
                }
            }
            try{
                data=await docClient.put(params).promise()
                resolve(data)
                console.log(`table ${table.id} added`)
            }catch(err){
                console.log(err);
                reject(err);
            }
        });
    })

    await new Promise((resolve,reject)=>{
        db.itemsDB.forEach(async item=>{
            params={
                TableName: 'Items',
                Item:{
                    ...item
                }
            }
            try{
                data=await docClient.put(params).promise()
                resolve(data)
                console.log(`item ${item.id} added`)
            }catch(err){
                console.log(err);
                reject(err);
            }
        });
    })

}
seedData();
