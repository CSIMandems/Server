import express from 'express';
import DB from '../../db/data-source';
import { getDentistsFromBranch } from './query';
const router = express.Router({ mergeParams: true });

router.get('/:branchId', async (req, res, next) => {
	try {
		const { branchId } = req.params;
		const data = await DB.raw(getDentistsFromBranch(+branchId));
		res.json({
			data: data.rows,
		});
	} catch (e) {
		next(e);
	}
});

export default router;
