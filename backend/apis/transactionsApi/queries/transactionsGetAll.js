const Transaction = require('../transactionResource');

const transactionsGetAll = async (req, res) => {
  const transactions = await Transaction.find({}).sort({ createdAt: -1 });
  res.status(200).json(transactions);
}

module.exports = { transactionsGetAll };