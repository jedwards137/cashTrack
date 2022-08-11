interface TransactionModel {
  _id: Number;
  name: String;
  amount: Number;
  type: TransactionType;
  date: Date;
  isOnEditMode: Boolean;
  tableData: any;
}

enum TransactionType {
  Deposit,
  WithDrawal
}

export default TransactionModel;