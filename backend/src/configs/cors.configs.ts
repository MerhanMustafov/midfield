import { CorsOptions } from 'cors';

export const corsConfig: CorsOptions = {
  // origin: process.env.CLIENT_URL,
  origin: '*',
  methods: ['GET', 'HEAD'],
};
