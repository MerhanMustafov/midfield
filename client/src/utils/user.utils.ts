'use client';
import { User } from '@/types/user';

export const setLocalStorageUser = (user: User) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('midfieldUser', JSON.stringify(user));
  }
};

export const getLocalStorageUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const user = window.localStorage.getItem('midfieldUser');
    return user ? JSON.parse(user) : undefined;
  }
  return null;
};

export const removeLocalStorageUser = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('midfieldUser');
  }
};
