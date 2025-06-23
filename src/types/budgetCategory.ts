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
  Utilities,
  Entertainment,
  Groceries,
  EatingOut,
  Transportation,
  Housing,
  Health,
  Savings
}