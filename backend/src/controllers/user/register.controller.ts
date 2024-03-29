import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { pgClient } from '@configs/pgDB.configs';
import { hashPassword } from '@utils/password.utils';

export async function registerUser(req: Request, res: Response) {
  const { email, firstName, lastName, userName, password } = req.body;

  const hashedPassword = hashPassword(password);

  const isThereMissingRequiredFields =
    email === undefined ||
    firstName === undefined ||
    lastName === undefined ||
    userName === undefined ||
    hashedPassword === undefined;

  try {
    if (isThereMissingRequiredFields) {
      throw new Error('Required fields are missing. Please check and try again.');
    }

    // Check if user with this email already exists
    const exists = await pgClient.query('SELECT * FROM users WHERE LOWER(email) = $1', [
      email.toLowerCase(),
    ]);
    if (exists.rows[0]) {
      throw new Error('User with this email already exists !');
    }

    // Create user
    const createdUserData = await pgClient.query(
      'INSERT INTO users(user_name, email, first_name, last_name, password ) VALUES($1, $2, $3, $4,$5) RETURNING *',
      [userName, email, firstName, lastName, hashedPassword],
    );

    const userData = createdUserData.rows[0];
    if (!userData) {
      throw new Error('Error has occurred while creating user. Please try again !');
    }

    const tokenData = {
      id: userData.id,
      userName: userData.user_name,
      email: userData.email,
      hashedPassword: hashedPassword,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET!);

    const returnData = {
      email: userData.email,
      firstName: userData.first_name,
      lastName: userData.last_name,
      userName: userData.user_name,
      token,
    };
    return res.status(201).json(returnData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error !' });
  }
}
