import type { Transaction } from "../types/transaction";
import type { BudgetCategory, CategoryType } from "../types/budgetCategory";

//TODO: split these functions into seperate files.

const baseUrl = 'http://localhost:5007/';

export async function getTransactions(): Promise<Transaction[]> {
  const url = new URL('api/Transaction', baseUrl);
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch transactions: ${response.status}`);
  }

  return await response.json();
}

export async function getLastFiveTransactions(): Promise<Transaction[]>{
  const url = new URL(`api/Transaction/LastFive`, baseUrl);
  const response = await fetch(url);

  if(!response.ok){
    throw new Error(`Failed to fetch the last five transactions. ${response.status}`);
  }

  return await response.json();
}

export async function getTransactionById(id: number): Promise<Transaction> {
  const url = new URL(`api/Transaction/${id}`, baseUrl);

  const reponse = await fetch(url);

  if (!reponse.ok){
    throw new Error(`Failed to fetch transactions: ${reponse.status}`);
  }

  return await reponse.json();
}

export async function getTransactionByCategory(categoryType: CategoryType)
  :Promise<Transaction> {
    const url = new URL(`api/Transaction/${categoryType}`, baseUrl);

    const response = await fetch(url);

    if (!response.ok){
      throw new Error(`Failed to fetch transactions with the provided category type: 
        ${response.status}`);
    }
    
    return await response.json();
  }

export async function getBudgetCategories(): Promise<BudgetCategory[]> {
  const url = new URL('api/BudgetCategory', baseUrl);
  const response = await fetch(url);

  if (!response.ok){
    throw new Error(`Failed to fetch budget categories: ${response.status}`)
  }
  
  return await response.json();
}

export async function createTransaction(transaction: Transaction):Promise<boolean>{
  const url = new URL(`api/Transaction/CreateTransaction/`, baseUrl);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error creating the transaction. ${response.status}`);
  }

  return true;
}

export async function createBiWeeklyTransaction(transaction: Transaction):Promise<boolean>{
  const url = new URL(`api/Transaction/CreateBiWeeklyTransaction/${transaction}`, baseUrl);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error creating the bi-weekly transaction. ${response.status}`);
  }

  return true;
}

export async function createMonthlyTransaction(transaction: Transaction):Promise<boolean>{
  const url = new URL(`api/Transaction/CreateMonthlyTransaction/${transaction}`, baseUrl);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error creating the monthly transaction. ${response.status}`);
  }

  return true;
}

export async function updateTransaction(transaction: Transaction):Promise<boolean>{
  const url = new URL(`api/Transaction/UpdateTransaction/${transaction}`, baseUrl);
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error updating the transaction. ${response.status}`);
  }
  
  return true;
}

export async function deleteTransaction(transactionId: number):Promise<boolean>{
  const url = new URL(`api/Transaction/${transactionId}`, baseUrl);
  const response = await fetch(url, {
    method: 'DELETE',
  });

  if(!response.ok){
    throw new Error(`There was an error deleting the transaction with the provided ID ${response.status}`);
  }

  return true;
}

export async function getIncomeTransactionBalance():Promise<number>{
  const url = new URL (`api/Transaction/IncomeBalance`, baseUrl);
  const response = await fetch(url);

  if(!response.ok){
    throw new Error(`There was an error retrieving the income account balance. ${response.status}`);
  }

  return response.json();
}

export async function getExpenseTransactionBalance():Promise<number>{
  const url = new URL (`api/Transaction/ExpenseBalance`, baseUrl);
  const response = await fetch (url);

  if(!response.ok){
    throw new Error(`There was an error retrieving the expense account balance. ${response.status}`);
  }

  return response.json();
}

export async function createBudgetCategory(budgetCategory: BudgetCategory):Promise<boolean>{
  const url = new  URL(`api/BudgetCategory`, baseUrl);
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(budgetCategory)
  });

  if(!response.ok){
    throw new Error(`There was an error creating the budget category. ${response.status}`)
  }

  return true;
}

export async function getBudgetCategoryTypes(): Promise<string[]>{
  const url = new URL(`api/BudgetCategory/BudgetCategoryTypes`, baseUrl);

  const response = await fetch(url);

  if (!response.ok){
    throw new Error(`Could not get budget category types. ${response.status}`);
  }

  return response.json();
}