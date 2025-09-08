import type { User } from "../types/user"

export const handleUser = (email: string, password: string):User => {
  const user: User = {
    email: email,
    password: password
  }
  return user;
}