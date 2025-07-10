import type { Transaction } from "../types/transaction";
import type { BudgetCategory, CategoryType } from "../types/budgetCategory";

//TODO: split these functions into seperate files.

const baseUrl = 'https:localhost:7156/';

export async function getTransactions(): Promise<Transaction[]> {
  const url = new URL('api/Finance/Transaction', baseUrl);
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch transactions: ${response.status}`);
  }

  return await response.json();
}

export async function getLastFiveTransactions(): Promise<Transaction[]>{
  const url = new URL(`api/Finance/Transaction/LastFive`, baseUrl);
  const response = await fetch(url);

  if(!response.ok){
    throw new Error(`Failed to fetch the last five transactions. ${response.status}`);
  }

  return await response.json();
}

export async function getTransactionById(id: number): Promise<Transaction> {
  const url = new URL(`api/Finance/Transaction/${id}`, baseUrl);

  const reponse = await fetch(url);

  if (!reponse.ok){
    throw new Error(`Failed to fetch transactions: ${reponse.status}`);
  }

  return await reponse.json();
}

export async function getTransactionByCategory(categoryType: CategoryType)
  :Promise<Transaction> {
    const url = new URL(`api/Finance/Transaction/${categoryType}`, baseUrl);

    const response = await fetch(url);

    if (!response.ok){
      throw new Error(`Failed to fetch transactions with the provided category type: 
        ${response.status}`);
    }
    
    return await response.json();
  }

export async function getBudgetCategories(): Promise<BudgetCategory[]> {
  const url = new URL('api/Finance/BudgetCategory', baseUrl);
  const response = await fetch(url);

  if (!response.ok){
    throw new Error(`Failed to fetch budget categories: ${response.status}`)
  }
  
  return await response.json();
}

export async function createTransaction(transaction: Transaction):Promise<boolean>{
  const url = new URL(`api/Finance/Transaction/CreateTransaction${transaction}`, baseUrl);
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error creating the transaction. ${response.status}`);
  }

  return true;
}

export async function createBiWeeklyTransaction(transaction: Transaction):Promise<boolean>{
  const url = new URL(`api/Finance/Transaction/CreateBiWeeklyTransaction/${transaction}`, baseUrl);
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error creating the bi-weekly transaction. ${response.status}`);
  }

  return true;
}

export async function createMonthlyTransaction(transaction: Transaction):Promise<boolean>{
  const url = new URL(`api/Finance/Transaction/CreateMonthlyTransaction/${transaction}`, baseUrl);
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error creating the monthly transaction. ${response.status}`);
  }

  return true;
}

export async function updateTransaction(transaction: Transaction):Promise<boolean>{
  const url = new URL(`api/Finance/Transaction/UpdateTransaction/${transaction}`, baseUrl);
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error updating the transaction. ${response.status}`);
  }
  
  return true;
}

export async function deleteTransaction(transactionId: number):Promise<boolean>{
  const url = new URL(`api/Finance/Transaction/DeleteTransaction/${transactionId}`, baseUrl);
  const response = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(transactionId)
  });

  if(!response.ok){
    throw new Error(`There was an error deleting the transaction with the provided ID ${response.status}`);
  }

  return true;
}

export async function getIncomeTransactionBalance():Promise<number>{
  const url = new URL (`api/Finance/Transaction/IncomeBalance`, baseUrl);
  const response = await fetch(url);

  if(!response.ok){
    throw new Error(`There was an error retrieving the income account balance. ${response.status}`);
  }

  return response.json();
}

export async function getExpenseTransactionBalance():Promise<number>{
  const url = new URL (`api/Finance/Transaction/ExpenseBalance`, baseUrl);
  const response = await fetch (url);

  if(!response.ok){
    throw new Error(`There was an error retrieving the expense account balance. ${response.status}`);
  }

  return response.json();
}

export async function createBudgetCategory(budgetCategory: BudgetCategory):Promise<boolean>{
  const url = new  URL(`api/Finance/BudgetCategory/CreateBudgetCategory`, baseUrl);
  
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(budgetCategory)
  });

  if(!response.ok){
    throw new Error(`There was an error creating the budget category. ${response.status}`)
  }

  return true;
}