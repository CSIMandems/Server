export const getEmployeesFromBranch = (branch_number: number) => {
	return `SELECT employee_id, first_name, middle_name, last_name
  FROM employee
  WHERE employee_type = 'Dentist' and
    branch_id = ${branch_number}`;
};
