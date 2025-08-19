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

export const registerUser = async (user:User):Promise<boolean> => {
  
  const url = new URL(`api/User/Register`, getBaseUrl());

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  });

  if(!response.ok){
    throw new Error(`Something went wrong when trying to register with your details. ${response.status}`);
  }

  return true;
}

export const validateUserToken = async ():Promise<boolean> => {
  const url = new URL(`api/User/Validate/`, getBaseUrl());

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
    }
  });

if (response.status === 200){
  return true;
}

if (response.status === 401) {
  removeToken();
  return false;
}

throw new Error(`Something went wrong when trying to validate the token. ${response.status}`);
}

export const isUserLoggedIn = async ():Promise<boolean> => {
  const token = getToken();

  if(!token){
    return false;
  }

  return await validateUserToken();
}