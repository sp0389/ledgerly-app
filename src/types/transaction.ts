import type { BudgetCategory } from "./budgetCategory";

export interface Transaction {
  Id: number;
  Amount: number;
  Date: Date;
  IsRecurring: boolean;
  EndDate?: Date;
  Occurrences?: number;
  Description: string;
  SelectedDays: DayOfWeek[];
  TransactionType: TransactionType;
  BudgetCategory: BudgetCategory;
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