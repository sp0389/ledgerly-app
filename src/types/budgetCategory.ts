import type { Transaction } from './transaction'

export interface BudgetCategory {
  id?: number;
  title: string;
  amount: number;
  startDate: string;
  endDate: string;
  description: string;
  categoryType?: CategoryType;
  transactions?: Transaction[];
}

export interface BudgetCategorySummary {
  id: number;
  title: string;
  availableAmount: number;
  spentAmount: number;
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