import { Appointment } from './types';

export const getPatientAppointments = (patient_id: number) => {
	return `SELECT *
  FROM appointment
  WHERE date > NOW() and patient_id = ${patient_id}`;
};

export const createAppointment = (a: Appointment) => {
	return `INSERT INTO appointment (date, start_time, end_time, appointment_type, room_number,
    patient_id, employee_id)
    VALUES ('${a.date}', '${a.start_time}', '${a.end_time}', '${a.appointment_type}', '${a.room_number}',
            ${a.patient_id}, ${a.employee_id})
    RETURNING appointment_id`;
};
