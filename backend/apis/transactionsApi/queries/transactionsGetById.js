const { validateMongooseId } = require('../../../utils/helpers');
const Transaction = require('../transactionResource');

const transactionsGetById = async (req, res) => {
  const { id } = req.params;
  if (validateMongooseId(id)) {
    return res.status(404).json({ error: 'no such transaction' });
  }
  
  const transaction = await Transaction.findById(id);
  if (!transaction) {
    return res.status(404).json({ error: 'no such transaction' });
  }
  res.status(200).json(transaction);
}

module.exports = { transactionsGetById };