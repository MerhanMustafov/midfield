import { Request, Response } from 'express';
import { pgClient } from '@configs/pgDB.configs';
import { comparePassword } from '@utils/password.utils';

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  const isThereMissingRequiredFields = email === undefined || password === undefined;

  try {
    if (isThereMissingRequiredFields) {
      throw new Error('Required fields are missing. Please check and try again.');
    }

    // Check if user with this email already exists
    const existingUser = await pgClient.query('SELECT * FROM users WHERE LOWER(email) = $1', [
      email.toLowerCase(),
    ]);

    const userData = existingUser.rows[0];
    if (!userData) {
      throw new Error('User with this email does not exists.');
    }

    const isPasswordCorrect = comparePassword(password, userData.password);
    if (!isPasswordCorrect) {
      throw new Error('Password is incorrect.');
    }

    return res.status(201).json({ userData: userData });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
