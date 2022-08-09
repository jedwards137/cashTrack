const { validateMongooseId } = require('../../../utils/helpers');
const Transaction = require('../transactionResource');

const transactionsUpdateById = async (req, res) => {
  const { id } = req.params;
  if (validateMongooseId(id)) {
    return res.status(404).json({ error: 'no such transaction' });
  }

  const transaction = await Transaction.findOneAndUpdate({ _id: id}, {
    ...req.body
  });

  if (!transaction) {
    return res.status(400).json({ error: 'no such transaction' });
  }

  res.status(200).json(transaction);
}

module.exports = { transactionsUpdateById };