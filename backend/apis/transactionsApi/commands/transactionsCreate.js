const Transaction = require('../transactionResource');

const transactionsCreate = async (req, res) => {
  const { name, type, amount, date } = req.body;
  try {
    const transaction = await Transaction.create({ name, amount, type, date });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports = { transactionsCreate };