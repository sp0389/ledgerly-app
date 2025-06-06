import type { Transaction } from "../types/transaction";
import type { BudgetCategory } from "../types/budgetCategory";

const baseUrl = 'https:localhost:7156/'

export async function getTransactions(): Promise<Transaction[]> {
  const url = new URL('api/Finance/Transactions', baseUrl);
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch transactions: ${response.status}`);
  }

  const transactions = await response.json();

  return transactions as Transaction[];
}

export async function getBudgetCategories(): Promise<BudgetCategory[]> {
  const url = new URL('api/Finance/BudgetCategory', baseUrl);
  const response = await fetch(url);

  if (!response.ok){
    throw new Error(`Failed to fetch budget categories: ${response.status}`)
  }
  
  const budgetCategories = await response.json();

  return budgetCategories as BudgetCategory[];
}