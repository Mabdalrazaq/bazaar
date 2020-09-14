const express = require('express');
const app = express();
const cors=require('cors')
const bodyParser=require('body-parser');
const morgan=require('morgan');
module.exports = app;

const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(bodyParser.json())

app.use(morgan('tiny'));
const apiRouter = require('./server/api');

app.use('/api',apiRouter);

app.listen(PORT,()=>{
console.log(`Server is listening on port ${PORT}`);
})