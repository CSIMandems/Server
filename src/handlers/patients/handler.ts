import express from 'express';
import DB from '../../db/data-source';
import { selectAllPatients, createPatient, getPatientInfo } from './query';
const router = express.Router({ mergeParams: true });

router.get('/', async (_, res, next) => {
	try {
		const data = await DB.raw(selectAllPatients());
		res.json({
			data: data.rows,
		});
	} catch (e) {
		next(e);
	}
});

router.get('/:patientId', async (req, res, next) => {
	try {
		const { patientId } = req.params;
		const data = await DB.raw(getPatientInfo(+patientId));
		res.json({
			data: data.rows,
		});
	} catch (e) {
		next(e);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const query = createPatient(req.body);
		const data = await DB.raw(query);
		res.status(201).json(data.rows[0]);
	} catch (e) {
		next(e);
	}
});

export default router;
