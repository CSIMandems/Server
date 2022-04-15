export const getEmployeeBranch = (id: number) => {
	return `SELECT b.branch_id,b.civic_number,b.street_name, b.city, b.province, b.postal_code
  FROM branch as b
  WHERE b.branch_id = (
      SELECT e.branch_id
      FROM employee as e
      WHERE e.employee_id = ${id});`;
};

export const getEmployeeInfo = (id: number) => {
	return `SELECT CONCAT(first_name,' ', last_name ),employee_type from employee as e
  WHERE  e.employee_id = ${id};`;
};
