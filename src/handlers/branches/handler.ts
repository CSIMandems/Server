import express from 'express';
import DB from '../../db/data-source';
import { getEmployeesFromBranch } from './query';

const router = express.Router({ mergeParams: true });

router.get('/employees/:branchId', async (req, res, next) => {
	try {
		const { branchId } = req.params;
		const data = await DB.raw(getEmployeesFromBranch(+branchId));
		res.json({
			data: data.rows,
		});
	} catch (e) {
		next(e);
	}
});

export default router;
