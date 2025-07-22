import type { User } from "../types/user";

export const getBaseUrl = ():string => {
  return "http://localhost:5007/";
}

export const login = async (user: User):Promise<Boolean> => {

  const url = new URL('api/User/Login', getBaseUrl());

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok){
    throw new Error(`There was an error logging in with the provided credentials. ${response.status}`);
  }

  else {
    const token = await response.text();
    localStorage.setItem('token', token);
  }

  return true;
}

export const getToken = (): string => {
  
  if(!localStorage.getItem('token')){
    throw new Error("No token found in local storage. Please log in first.");
  }

  return localStorage.getItem('token') as string;
}

export const removeToken = (): void => {
  localStorage.removeItem('token');
}