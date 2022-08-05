const express = require('express');
const {
  getTransactions,
  getTransactionById,
  createTransaction,
  deleteTransaction,
  updateTransaction
} = require('./transactionsController');

const router = express.Router();

router.get('/', getTransactions);

router.get('/:id', getTransactionById);

router.post('/', createTransaction);

router.delete('/:id', deleteTransaction);

router.patch('/:id', updateTransaction);

module.exports = router;