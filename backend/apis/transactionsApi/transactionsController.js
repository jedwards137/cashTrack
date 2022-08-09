const express = require('express');
const Transaction = require('./transactionResource');
const { transactionsGetAll } = require('./queries/transactionsGetAll');
const { transactionsGetById } = require('./queries/transactionsGetById');
const { transactionsCreate } = require('./commands/transactionsCreate');
const { transactionsDeleteById } = require('./commands/transactionsDeleteById');
const { transactionsUpdateById } = require('./commands/transactionsUpdateById');

const router = express.Router();

router.get('/', transactionsGetAll);

router.get('/:id', transactionsGetById);

router.post('/', transactionsCreate);

router.delete('/:id', transactionsDeleteById);

router.patch('/:id', transactionsUpdateById);

module.exports = router;