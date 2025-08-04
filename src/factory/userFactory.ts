import type { User } from "../types/user"

export const handleUser = (username: string, password: string):User => {
  const user: User = {
    username: username,
    password: password
  }
  return user;
}