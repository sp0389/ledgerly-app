import { CategoryType, type BudgetCategory } from "./budgetCategory";

export interface Transaction {
  Id?: number;
  Title: string;
  Amount: number;
  Date: Date;
  EndDate?: Date;
  Occurrences: number;
  Description: string;
  SelectedDays: string[];
  TransactionType: TransactionType;
  CategoryType?: CategoryType;
  BudgetCategory?: BudgetCategory;
}

export enum TransactionType {
  Income = "Income",
  Expense = "Expense"
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