import express from 'express';
import DB from '../../db/data-source';
import { getAvailableProcedures } from './query';
const router = express.Router({ mergeParams: true });

router.get('/', async (_, res, next) => {
	try {
		const data = await DB.raw(getAvailableProcedures());
		res.json({
			data: data.rows,
		});
	} catch (e) {
		next(e);
	}
});

export default router;
