import express from 'express';
import DB from '../../db/data-source';
import { getAllReviews, getReviewByBranch } from './query';
const router = express.Router({ mergeParams: true });

router.get('/', async (_, res, next) => {
	try {
		const query = getAllReviews();
		const data = await DB.raw(query);
		res.status(200).json(data.rows);
	} catch (e) {
		next(e);
	}
});

router.get('/:branchId', async (req, res, next) => {
	try {
		const { branchId } = req.params;
		const data = await DB.raw(getReviewByBranch(+branchId));
		res.status(200).json(data.rows);
	} catch (e) {
		next(e);
	}
});

export default router;
