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
        const data= await dynamodb.deleteTable(params).promise() 
    }catch(err){
        console.log(err.message);
    }

    params={
        TableName: 'Users'
    }

    try{
        const data= await dynamodb.deleteTable(params).promise() 
    }catch(err){
        console.log(err.message);
    }

    params={
        TableName: 'Items'
    }

    try{
        const data= await dynamodb.deleteTable(params).promise() 
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
        const data= await dynamodb.createTable(params).promise() 
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
        const data= await dynamodb.createTable(params).promise() 
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
        const data= await dynamodb.createTable(params).promise() 
    }catch(err){
        console.log(err.message);
    }
    
    await new Promise(async(resolve,reject)=>{
        for(let i=0;i<db.tablesDB.length;i++){
            params={
                TableName: 'Tables',
                Item:{
                    ...db.tablesDB[i]
                }
            }
            try{
                const data=await docClient.put(params).promise();
                console.log(`table ${db.tablesDB[i].id} added`);
                resolve(data);
            }catch(err){
                console.log(err);
                reject(err)
            }
        }
    })


    await new Promise(async(resolve,reject)=>{
        for(let i=0;i<db.usersDB.length;i++){
            params={
                TableName: 'Users',
                Item:{
                    ...db.usersDB[i]
                }
            }
            try{
                const data=await docClient.put(params).promise();
                console.log(`user ${db.usersDB[i].id} added`);
                resolve(data);
            }catch(err){
                console.log(err);
                reject(err)
            }
        }
    })

    await new Promise(async(resolve,reject)=>{
        for(let i=0;i<db.itemsDB.length;i++){
            params={
                TableName: 'Items',
                Item:{
                    ...db.itemsDB[i]
                }
            }
            try{
                const data=await docClient.put(params).promise();
                console.log(`item ${db.itemsDB[i].id} added`);
                resolve(data);
            }catch(err){
                console.log(err);
                reject(err)
            }
        }
    })

}
seedData();
