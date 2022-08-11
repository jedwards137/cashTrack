import { useEffect, useState } from "react";
import MonthlyTransactionsTable from '../components/MonthlyTransactionsTable';

const Home = () => {
  const [transactions, setTransactions] = useState<any>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('/api/transactions');
      const jsonResponse = await response.json();

      if (response.ok) {
        setTransactions(jsonResponse);
      }
    }

    fetchTransactions();
  }, []);

  return (
    <div className="home">
      <div className="transactions">
        {transactions && transactions.map((transaction: any) => (
          <p key={transaction._id}>{transaction.name}</p>
        ))}
        <MonthlyTransactionsTable transactions={transactions} />
      </div>
    </div>
  );
}

export default Home;