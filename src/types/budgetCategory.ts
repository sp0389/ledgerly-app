import type { Transaction } from './transaction'

export interface BudgetCategory {
  id?: number;
  amount: number;
  startDate: string;
  endDate: string;
  description: string;
  categoryType?: CategoryType;
  transactions?: Transaction[];
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