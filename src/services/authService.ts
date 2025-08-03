import type { User } from "../types/user";

export const getBaseUrl = ():string => {
  return "http://localhost:5007/";
}

export const login = async (user: User):Promise<boolean> => {

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

export const getToken = ():string | null => {
  
  if(!localStorage.getItem('token')){
    return null;
  }

  return localStorage.getItem('token');
}

export const removeToken = ():void => {
  localStorage.removeItem('token');
}

export const registerUser = async (username: string, password: string):Promise<boolean> => {
  
  const url = new URL(`'api/User/Register`, getBaseUrl());

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${getToken()}`
    },
    body: JSON.stringify({ username, password })
  });

  if(!response.ok){
    throw new Error(`Something went wrong when trying to register with your details. ${response.status}`);
  }

  return true;
}