import type { CategoryType } from "../types/budgetCategory";
import type { DayOfWeek, Transaction, TransactionType } from "../types/transaction"

export const handleSingleTransaction = (title: string, amount: number, startDate: Date, endDate: Date,
  description: string, transactionType: TransactionType, selectedBudgetCategory: CategoryType | undefined
):Transaction => {
  const transaction: Transaction = {
    Title: title,
    Amount: amount,
    Date: startDate,
    EndDate: endDate,
    Description: description,
    TransactionType: transactionType,
    CategoryType: selectedBudgetCategory,
  }

  return transaction;
}

export const handleRepeatingTransaction = (title: string, amount: number, startDate: Date, endDate: Date, occurrences: number, 
  description: string, days: DayOfWeek[],transactionType: TransactionType, selectedBudgetCategory: CategoryType | undefined
): Transaction => {
  const transaction: Transaction = {
    Title: title,
    Amount: amount,
    Date: startDate,
    EndDate: endDate,
    Occurrences: occurrences,
    Description: description,
    SelectedDays: days,
    TransactionType: transactionType,
    CategoryType: selectedBudgetCategory,
  }

  return transaction;
}