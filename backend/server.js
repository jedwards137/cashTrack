require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const transactionsController = require('./apis/transactionsApi/transactionsController');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/transactions', transactionsController);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('mongo connected and listening on port 4000')
    });
  })
  .catch((error) => {
    console.log(error);
  });