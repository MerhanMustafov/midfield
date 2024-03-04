import bcrypt from 'bcrypt';

/**
 * @description
 * Hashes the password using bcrypt
 *
 * @param {string} password
 * @returns - hashed password
 *
 * @example - hashPassword('password') => '$2b$10$3Z
 */
export const hashPassword = (password: string): string => {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};

export const comparePassword = (password: string, hashedPassword: string): boolean => {
  return bcrypt.compareSync(password, hashedPassword);
};
