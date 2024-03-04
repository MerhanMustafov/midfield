import { Request, Response } from 'express';
import { pgClient } from '@configs/pgDB.configs';
import { hashPassword } from '@utils/password.utils';

export async function registerUser(req: Request, res: Response) {
  const { email, firstName, lastName, userName, password } = req.body;

  const hashedPassword = hashPassword(password);

  const isThereRequiredFields =
    email === undefined ||
    firstName === undefined ||
    lastName === undefined ||
    userName === undefined ||
    hashedPassword === undefined;

  try {
    if (isThereRequiredFields) {
      throw new Error('Required fields are missing. Please check and try again.');
    }

    // Check if user with this email already exists
    const exists = await pgClient.query(
      'SELECT * FROM users WHERE LOWER(email) = $1 OR LOWER(userName) = $2',
      [email.toLowerCase(), userName.toLowerCase()],
    );
    if (exists.rows[0]) {
      throw new Error('User with this email already exists.');
    }

    // Create user
    const createdUserData = await pgClient.query(
      'INSERT INTO users(userName, email, firstName, lastName, password ) VALUES($1, $2, $3, $4,$5) RETURNING *',
      [userName, email, firstName, lastName, hashedPassword],
    );

    if (!createdUserData.rows[0]) {
      throw new Error('Error has occurred while creating user. Please try again.');
    }

    return res.status(201).json({ userData: createdUserData.rows[0] });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
