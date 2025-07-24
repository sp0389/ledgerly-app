import type { DayOfWeek, Transaction, TransactionType } from "../types/transaction"

export const handleSingleTransaction = (title: string, amount: number, startDate: Date,
  description: string, transactionType: TransactionType, selectedBudgetCategoryId: number | undefined
):Transaction => {
  const transaction: Transaction = {
    title: title,
    amount: amount,
    date: startDate,
    description: description,
    transactionType: transactionType,
    budgetCategoryId: selectedBudgetCategoryId,
  }

  return transaction;
}

export const handleRepeatingTransaction = (title: string, amount: number, startDate: Date, endDate: Date | null, occurrences: number, 
  description: string, days: DayOfWeek[],transactionType: TransactionType, selectedBudgetCategoryId: number | undefined
): Transaction => {
  const transaction: Transaction = {
    title: title,
    amount: amount,
    date: startDate,
    endDate: endDate,
    occurrences: occurrences,
    description: description,
    selectedDays: days,
    transactionType: transactionType,
    budgetCategoryId: selectedBudgetCategoryId,
  }

  return transaction;
}