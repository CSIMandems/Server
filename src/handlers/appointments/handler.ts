import express from 'express';
import DB from '../../db/data-source';
import { getPatientAppointments, createAppointment } from './query';
const router = express.Router({ mergeParams: true });

router.get('/:patientId', async (req, res, next) => {
	try {
		const { patientId } = req.params;
		const data = await DB.raw(getPatientAppointments(+patientId));
		res.json({
			data: data.rows,
		});
	} catch (e) {
		next(e);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const query = createAppointment(req.body);
		const data = await DB.raw(query);
		res.status(201).json(data.rows[0]);
	} catch (e) {
		next(e);
	}
});

export default router;
