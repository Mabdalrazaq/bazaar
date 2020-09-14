const express = require('express');
const apiRouter = express.Router();
const tablesRouter=require('./api-routers/tablesRouter');
const usersRouter=require('./api-routers/usersRouter');
const itemsRouter=require('./api-routers/itemsRouter')
const app = require('../server');

apiRouter.use('/tables',tablesRouter);
apiRouter.use('/users',usersRouter);
apiRouter.use('/items',itemsRouter);

module.exports = apiRouter;
