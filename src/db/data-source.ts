import knex from 'knex';

export const DB = knex({
	client: 'pg',
	connection: {
		user: 'sxkueiteqobqdo',
		password:
			'7705c0a468d6a1249d41f29a5929fd5f1abbdf27c85183111025d20e86369f9d',
		port: 5432,
		database: 'd4qsp2dc32bdge',
		host: 'ec2-52-71-69-66.compute-1.amazonaws.com',
		ssl: { rejectUnauthorized: false },
	},
});

export default DB;
