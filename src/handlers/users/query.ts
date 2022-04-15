import { User } from './types';

export const createUser = (newUser: User) => {
	return `INSERT INTO users (username, password)
  VALUES ('${newUser.username}', '${newUser.password}')
  RETURNING user_id`;
};

export const checkUserExists = (username: string) => {
	return `SELECT COUNT(*)
  FROM users
  WHERE username = '${username}'`;
};

export const getUserType = (u: User) => {
	return `WITH sub as (
    SELECT employee_type
    FROM users
    FULL OUTER JOIN employee on users.user_id = employee.user_id
    FULL OUTER JOIN patient on users.user_id = patient.user_id
    WHERE users.username = '${u.username}' and users.password = '${u.password}'
  )
  SELECT CASE WHEN employee_type IS null THEN 'Patient'
        ELSE employee_type
        END as user_type
  FROM sub`;
};
