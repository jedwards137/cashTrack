require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const transactionRouter = require('./apis/transactionsApi/transactionsRouter');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/transactions', transactionRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('mongo connected and listening on port 4000')
    });
  })
  .catch((error) => {
    console.log(error);
  });