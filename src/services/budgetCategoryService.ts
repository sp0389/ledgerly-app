import type { BudgetCategory } from "../types/budgetCategory";
import { getBaseUrl, getToken } from "./authService";

const baseUrl = getBaseUrl();

export async function getBudgetCategories(): Promise<BudgetCategory[]> {
  const url = new URL('api/BudgetCategory', baseUrl);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
    }
  });

  if (!response.ok){
    throw new Error(`Failed to fetch budget categories: ${response.status}`)
  }
  
  return await response.json();
}

export async function createBudgetCategory(budgetCategory: BudgetCategory):Promise<boolean>{
  const url = new  URL(`api/BudgetCategory`, baseUrl);
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
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

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
    }
  })

  if (!response.ok){
    throw new Error(`Could not get budget category types. ${response.status}`);
  }

  return response.json();
}