import express from 'express';
import DB from '../../db/data-source';
import { createUser, checkUserExists, getUserType } from './query';
const router = express.Router({ mergeParams: true });

router.post('/', async (req, res, next) => {
	try {
		const query = createUser(req.body);
		const data = await DB.raw(query);
		res.status(201).json(data.rows[0]);
	} catch (e) {
		next(e);
	}
});

router.post('/exists', async (req, res, next) => {
	try {
		const data = await DB.raw(checkUserExists(req.body.username));
		res.status(200).json(data.rows[0]);
	} catch (e) {
		next(e);
	}
});

router.post('/login', async (req, res, next) => {
	try {
		const data = await DB.raw(getUserType(req.body));
		res.status(200).json(data.rows[0]);
	} catch (e) {
		next(e);
	}
});

export default router;
