import type { Transaction } from "../types/transaction";
import { getBaseUrl, getToken } from "./authService";
import { type CategoryType } from "../types/budgetCategory";

const baseUrl = getBaseUrl();

export const getTransactions = async ():Promise<Transaction[]> => {
  const url = new URL('api/Transaction', baseUrl);
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch transactions: ${response.status}`);
  }

  return await response.json();
}

export const getLastFiveTransactions = async ():Promise<Transaction[]> => {
  const url = new URL(`api/Transaction/LastFive`, baseUrl);
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
    },
  });

  if(!response.ok){
    throw new Error(`Failed to fetch the last five transactions. ${response.status}`);
  }

  return await response.json();
}

export const getTransactionById = async (id: number):Promise<Transaction> =>{ 
  const url = new URL(`api/Transaction/${id}`, baseUrl);
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
    }
  });

  if (!response.ok){
    throw new Error(`Failed to fetch transactions: ${response.status}`);
  }

  return await response.json();
}

export const getTransactionByCategory = async (categoryType: CategoryType):Promise<Transaction[]> => {
  const url = new URL(`api/Transaction/${categoryType}`, baseUrl);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
    }
  });

  if (!response.ok){
    throw new Error(`Failed to fetch transactions with the provided category type: 
      ${response.status}`);
  }
  
  return await response.json();
}

export const createTransaction = async (transaction: Transaction):Promise<boolean> => {
  const url = new URL(`api/Transaction/CreateTransaction/`, baseUrl);
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
    },
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error creating the transaction. ${response.status}`);
  }

  return true;
}

export const createWeeklyTransaction = async (transaction: Transaction):Promise<boolean> => {
  const url = new URL(`api/Transaction/CreateWeeklyTransaction/`, baseUrl);
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
    },
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error creating the bi-weekly transaction. ${response.status}`);
  }

  return true;
}

export const createBiWeeklyTransaction = async (transaction: Transaction):Promise<boolean> => {
  const url = new URL(`api/Transaction/CreateBiWeeklyTransaction/`, baseUrl);
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
    },
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error creating the bi-weekly transaction. ${response.status}`);
  }

  return true;
}

export const createMonthlyTransaction = async (transaction: Transaction):Promise<boolean> => {
  const url = new URL(`api/Transaction/CreateMonthlyTransaction/`, baseUrl);
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
    },
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error creating the monthly transaction. ${response.status}`);
  }

  return true;
}

export const updateTransaction = async (transaction:Transaction):Promise<boolean> => {
  const url = new URL(`api/Transaction/UpdateTransaction/${transaction}`, baseUrl);
  
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
    },
    body: JSON.stringify(transaction)
  });

  if(!response.ok){
    throw new Error(`There was an error updating the transaction. ${response.status}`);
  }
  
  return true;
}

export const deleteTransaction = async (transactionId: number):Promise<boolean> => {
  const url = new URL(`api/Transaction/${transactionId}`, baseUrl);
  
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
    }
  });

  if(!response.ok){
    throw new Error(`There was an error deleting the transaction with the provided ID ${response.status}`);
  }

  return true;
}

export const getTotalTransactionBalance = async ():Promise<number> => {
  const url = new URL (`api/Transaction/TotalBalance`, baseUrl);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });

  if(!response.ok){
    throw new Error(`There was an error retrieving the total transaction balance. ${response.status}`)
  }

  return response.json();
}

export const getIncomeTransactionBalance = async ():Promise<number> =>{
  const url = new URL (`api/Transaction/IncomeBalance`, baseUrl);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
    }
  });

  if(!response.ok){
    throw new Error(`There was an error retrieving the income account balance. ${response.status}`);
  }

  return response.json();
}

export const getExpenseTransactionBalance = async ():Promise<number> => {
  const url = new URL (`api/Transaction/ExpenseBalance`, baseUrl);
  
  const response = await fetch (url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
    }
  });

  if(!response.ok){
    throw new Error(`There was an error retrieving the expense account balance. ${response.status}`);
  }

  return response.json();
}

//TODO: update the year to be dynamic based on the current year.
export const getMonthlyIncomeTransactionAmounts = async ():Promise<number[]> => {
  const url = new URL (`api/Transaction/MonthlyIncomeAmounts/${2025}`, baseUrl);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
    }
  });

  if (!response.ok){
    throw new Error(`There was an error retrieving the monthly income transaction amounts. ${response.status}`);
  }

  return response.json();
}

//TODO: update the year to be dynamic based on the current year.
export const getMonthlyExpenseTransactionAmounts = async ():Promise<number[]> => {
  const url = new URL (`api/Transaction/MonthlyExpenseAmounts/${2025}`, baseUrl);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
    }
  });

  if (!response.ok){
    throw new Error(`There was an error retrieving the monthly expense transaction amounts. ${response.status}`);
  }

  return response.json();
}