import knex from 'knex';

export const DB = knex({
	client: 'pg',
	connection: {
		user: 'wrpmitrkktsrvh',
		password:
			'73e6a64c48bfeb0931a80920d8f424fb0f607715b233ed6a76cfc478d1e2712f',
		port: 5432,
		database: 'de24jalccuvbd1',
		host: '54.157.79.121',
	},
});

export default DB;
