import { CategoryType, type BudgetCategory } from "./budgetCategory";

export interface Transaction {
  id?: number;
  title: string;
  amount: number;
  date: Date;
  endDate?: Date | null;
  occurrences?: number;
  description: string;
  selectedDays?: DayOfWeek[];
  transactionType: TransactionType;
  categoryType?: CategoryType;
  budgetCategoryId?: number;
  budgetCategory?: BudgetCategory;
}

export interface PagedTransactions {
  page: number;
  pageSize: number;
  totalCount: number;
  transactions: Transaction[];
}

export enum TransactionType {
  Income,
  Expense
}

export enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}