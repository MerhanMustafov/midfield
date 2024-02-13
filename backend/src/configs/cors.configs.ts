import { CorsOptions } from 'cors';

export const corsConfig: CorsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'HEAD'],
};
