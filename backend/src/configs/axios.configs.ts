import axios, { AxiosInstance } from 'axios';

export const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL_FOOTBALL,
  headers: {
    'x-apisports-key': process.env.API_FOOTBALL_AUTH_KEY,
  },
});
