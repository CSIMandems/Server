import express from 'express';
import DB from '../../db/data-source';
import { getEmployeeBranch, getEmployeeInfo } from './query';
const router = express.Router({ mergeParams: true });

router.get('/branch/:employeeId', async (req, res, next) => {
	try {
		const { employeeId } = req.params;
		const data = await DB.raw(getEmployeeBranch(+employeeId));
		res.json({
			data: data.rows[0],
		});
	} catch (e) {
		next(e);
	}
});

router.get('/:employeeId', async (req, res, next) => {
	try {
		const { employeeId } = req.params;
		const data = await DB.raw(getEmployeeInfo(+employeeId));
		res.json({
			data: data.rows[0],
		});
	} catch (e) {
		next(e);
	}
});

export default router;
