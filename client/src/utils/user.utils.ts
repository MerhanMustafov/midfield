'use client';

type User = {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  token: string;
};

export const setLocalStorageUser = (user: User) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('midfieldUser', JSON.stringify(user));
  }
};

export const getLocalStorageUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const user = window.localStorage.getItem('midfieldUser');
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const removeLocalStorageUser = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('midfieldUser');
  }
};
