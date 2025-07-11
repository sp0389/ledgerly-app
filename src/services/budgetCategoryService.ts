import type { BudgetCategory, CategoryType } from "../types/budgetCategory";

export const handleNewBudgetCategory = (amount: number, startDate: string, endDate: string,
  description: string, categoryType: CategoryType): BudgetCategory => {
  const budgetCategory: BudgetCategory = {
    amount: amount,
    startDate: startDate,
    endDate: endDate,
    description: description,
    categoryType: categoryType,
  }

  return budgetCategory
}