import express from 'express';
import DB from '../../db/data-source';
import { selectAllPatients, createPatient } from './query';
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res, next) => {
	try {
		const data = await DB.raw(selectAllPatients());
		res.json({
			data: data.rows,
		});
	} catch (e) {
		next(e);
	}
});

export default router;
