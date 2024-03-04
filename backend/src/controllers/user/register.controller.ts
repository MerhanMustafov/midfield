import { Request, Response } from 'express';
import { pgClient } from '@configs/pgDB.configs';

export async function registerUser(req: Request, res: Response) {
  console.log(req.body);
  const { email, firstName, lastName, userName, password } = req.body;

  try {
    if (
      email === undefined ||
      firstName === undefined ||
      lastName === undefined ||
      userName === undefined ||
      password === undefined
    ) {
      throw new Error('Required fields are missing. Please check and try again.');
    }
    pgClient.query(
      `INSERT INTO users(email, firstName, lastName, userName, password) VALUES($1, $2, $3, $4,$5)`,
      [email, firstName, lastName, userName, password],
      (err) => {
        if (err) {
          console.error(err.stack);
        } else {
          console.log('User created successfully');
        }
      },
    );
    return res.status(201).json({ x: 'a' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
