import type { Transaction } from "../types/transaction";
import type { BudgetCategory, CategoryType } from "../types/budgetCategory";

const baseUrl = 'https:localhost:7156/'

export async function getTransactions(): Promise<Transaction[]> {
  const url = new URL('api/Finance/Transaction', baseUrl);
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch transactions: ${response.status}`);
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
  const url = new URL(`api/Finance/Transaction/DeleteTransaction/${transactionId}`);
  const response = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(transactionId)
  });

  if(!response.ok){
    throw new Error(`There was an error deleting the transaction with the provided ID ${response.status}`);
  }

  return true;
}