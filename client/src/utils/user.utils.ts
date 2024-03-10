'use client';

type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  token: string;
};
export const getUser = (): User | null => {
  if (window) {
    const user = window.localStorage.getItem('midfieldUser');
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const removeUser = () => {
  if (window) {
    window.localStorage.removeItem('midfieldUser');
  }
};
