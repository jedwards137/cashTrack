import { useEffect, useState } from "react";
import MaterialTable, { Column } from '@material-table/core';
import TransactionModel from '../models/Transaction';

interface MonthlyTransactionsTableProps {
  transactions: TransactionModel[];
}

const MonthlyTransactionsTable = (props: MonthlyTransactionsTableProps) => {
  const [tableData, setTableData] = useState<TransactionModel[]>([]);
  const [tableColumns, setTableColumns] = useState<Column<TransactionModel>[]>([]);

  useEffect(() => {
    if (props.transactions) {
      var sanitizedTransactions = props.transactions.map(transaction => ({...transaction, isOnEditMode: true}));
      setTableData(sanitizedTransactions);
    }
  }, [props.transactions]);

  const generateColumns = () => {
    return [
      {
        title: "Date",
        field: "date"
      },
      {
        title: "Name",
        field: "name"
      },
      {
        title: "Amount",
        field: "amount"
      },
      {
        title: "Type",
        field: "type",
      }
    ];
  }

  useEffect(() => {
    if (tableData && tableData.length > 0) {
      setTableColumns(generateColumns());
    }
  }, [tableData]);

  return (
    <MaterialTable
      data={tableData}
      columns={tableColumns}
      editable={{
        onRowAdd: newTransacton =>
          new Promise<void>((resolve, reject) => {
            setTimeout(() => {
              setTableData([...tableData, newTransacton]);
              resolve();
            }, 1000);
          }),
        onRowUpdate: (newTransacton, oldTransaction) =>
          new Promise<void>((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...tableData];
              const index = oldTransaction!.tableData.id;
              dataUpdate[index] = newTransacton;
              setTableData([...dataUpdate]);
              resolve();
            }, 1000);
          }),
        onRowDelete: oldTransaction =>
          new Promise<void>((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...tableData];
              const index = oldTransaction.tableData.id;
              dataDelete.splice(index, 1);
              setTableData([...dataDelete]);
              resolve();
            }, 1000);
          }),
      }}
      options={{
        actionsColumnIndex: -1
      }}
    />
  );
}

export default MonthlyTransactionsTable;