import express from 'express';
import DB from '../../db/data-source';
import { getPatientAppointments } from './query';
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

export default router;
