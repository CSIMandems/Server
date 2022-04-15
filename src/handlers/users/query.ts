import { User } from './types';

export const createUser = (newUser: User) => {
	return `INSERT INTO users (username, password)
  VALUES ('${newUser.username}', '${newUser.password}')
  RETURNING user_id`;
};
