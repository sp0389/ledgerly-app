import type { BudgetCategory, CategoryType } from "../types/budgetCategory";

export const handleNewBudgetCategory = (amount: number, startDate: Date, endDate: Date,
  description: string, categoryType: CategoryType): BudgetCategory => {
  const budgetCategory: BudgetCategory = {
    Amount: amount,
    StartDate: startDate,
    EndDate: endDate,
    Description: description,
    CategoryType: categoryType,
  }

  return budgetCategory
}