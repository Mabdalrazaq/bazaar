const express = require('express');
const apiRouter = express.Router();
const tablesRouter=require('./api-routers/tablesRouter');
const usersRouter=require('./api-routers/usersRouter');
const soldItemsRouter=require('./api-routers/soldItemsRouter')
const app = require('../server');

apiRouter.use('/tables',tablesRouter);
apiRouter.use('/users',usersRouter);
apiRouter.use('/soldItems',soldItemsRouter);

module.exports = apiRouter;
