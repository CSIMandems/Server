export const getAllReviews = () => {
	return `SELECT * FROM review
  ORDER BY review_id ASC`;
};

export const getReviewByBranch = (id: number) => {
	return `SELECT ROUND(AVG(professionalism),2),ROUND(AVG(cleanliness),2),ROUND(AVG(communication),2),ROUND(AVG(value),2) 
  FROM review  WHERE branch_id = ${id};`;
};
