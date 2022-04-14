export const getPatientAppointments = (patient_id: number) => {
	return `SELECT *
  FROM appointment
  WHERE date > NOW() and patient_id = ${patient_id}`;
};
