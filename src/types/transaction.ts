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

enum DayOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}
