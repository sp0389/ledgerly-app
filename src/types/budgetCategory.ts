import type { Transaction } from './transaction'

export interface BudgetCategory {
  Id: number;
  Amount: number;
  StartDate: Date;
  EndDate?: Date;
  Description: string;
  CategoryType?: CategoryType;
  Transactions: Transaction[];
}

export enum CategoryType {
  Utilities = "Utiliites",
  Entertainment = "Entertainment",
  Groceries = "Groceries",
  EatingOut = "Eating Out",
  Transportation = "Transportation",
  Housing = "Housing",
  Health = "Health",
  Savings = "Savings",
}