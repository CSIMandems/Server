import express from 'express';
import DB from '../../db/data-source';
import {
	getEmployeesFromBranch,
	getEmployeeBranch,
	getEmployeeInfo,
} from './query';
const router = express.Router({ mergeParams: true });

/*router.get('/branch/:branchId', async (req, res, next) => {
	try {
		const { branchId } = req.params;
		const data = await DB.raw(getEmployeesFromBranch(+branchId));
		res.json({
			data: data.rows,
		});
	} catch (e) {
		next(e);
	}
});*/

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

router.get('/:userId', async (req, res, next) => {
	try {
		const { userId } = req.params;
		const data = await DB.raw(getEmployeeInfo(+userId));
		res.json({
			data: data.rows[0],
		});
	} catch (e) {
		next(e);
	}
});

export default router;
