export const selectAllPatients = () => {
	return `SELECT * FROM public.users
    ORDER BY user_id ASC `;
};

export const createPatient = (username: string, password: string) => {
	return `INSERT INTO users (username, password)
  VALUES ('${username}', '${password}')
  RETURNING user_id`;
};
