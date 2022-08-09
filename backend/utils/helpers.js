const mongoose = require('mongoose');

const validateMongooseId = (id) => {
  const isValidMongooseId = mongoose.Types.ObjectId.isValid(id);
  return isValidMongooseId;
}

module.exports = { validateMongooseId };