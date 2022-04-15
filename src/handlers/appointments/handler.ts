import express from 'express';
import DB from '../../db/data-source';
import {
	getPatientAppointments,
	createAppointment,
	getEmployeeAppointments,
} from './query';
const router = express.Router({ mergeParams: true });

router.get('/patient/:patientId', async (req, res, next) => {
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

router.get('/employee/:employeeId', async (req, res, next) => {
	try {
		const { employeeId } = req.params;
		const data = await DB.raw(getEmployeeAppointments(+employeeId));
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
