// import { useEffect, useState } from "react";
import BudgetCategoryInput from "../../components/BudgetCategory/BudgetCategoryInput";
import Layout from "../../components/Layout";
import TransactionInput from '../../components/Transaction/TransactionInput';
import Calendar from "./Calendar";
// import TransactionView from "../../components/TransactionView";
// import { type Transaction, TransactionType } from "../../types/transaction";
// import { CategoryType } from "../../types/budgetCategory";

const Test = () => {
  // const [transaction, setTransaction] = useState<Transaction[]>([]);

  // useEffect(() => {
  //   const t: Transaction = {
  //     Id: 1,
  //     Amount: 29.99,
  //     Date: new Date(),
  //     IsRecurring: false,
  //     Occurrences: 1,
  //     Description: "A fast food chain where something was purchased.",
  //     SelectedDays: ["Monday"],
  //     TransactionType: TransactionType.Expense,

  //     BudgetCategory: {
  //       Id: 1,
  //       StartDate: new Date(),
  //       Amount: 1000,
  //       Description: "A budget category description",
  //       Transactions: [],
  //       CategoryType: CategoryType.EatingOut,
  //     },
  //   };

  //   const t2: Transaction = {
  //     Id: 2,
  //     Amount: 11.99,
  //     Date: new Date(),
  //     IsRecurring: false,
  //     Occurrences: 0,
  //     Description: "Another Purchase",
  //     SelectedDays: [],
  //     TransactionType: TransactionType.Expense,

  //     BudgetCategory: {
  //       Id: 2,
  //       StartDate: new Date(),
  //       Amount: 1000,
  //       Description: "A budget category description",
  //       Transactions: [],
  //       CategoryType: CategoryType.Entertainment,
  //     },
  //   };  

  //   setTransaction([t1, t2]);
  // }, []);

  return (
    <Layout>
      {/* <TransactionInput /> */}
      {/* <TransactionView transaction={transaction} /> */}
      <Calendar />
    </Layout>
  );
};

export default Test;