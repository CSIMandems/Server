export const getEmployeesFromBranch = (branch_number: number) => {
	return `SELECT employee_id, first_name, middle_name, last_name
  FROM employee
  WHERE employee_type = 'Dentist' and
    branch_id = ${branch_number}`;
};

export const getEmployeeBranch = (employee_id: number) => {
	return `SELECT b.branch_id,b.civic_number,b.street_name, b.city, b.province, b.postal_code
  FROM branch as b
  WHERE b.branch_id = (
      SELECT e.branch_id
      FROM employee as e
      WHERE e.employee_id = ${employee_id});`;
};

export const getEmployeeInfo = (id: number) => {
	return `SELECT employee_id, CONCAT(first_name,' ', last_name ),employee_type from employee as e
  WHERE  e.user_id = ${id};`;
};
