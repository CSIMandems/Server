import { Patient } from './types';

export const selectAllPatients = () => {
	return `SELECT * FROM public.users
    ORDER BY user_id ASC `;
};

export const createPatient = (p: Patient) => {
	return `INSERT INTO patient (first_name, middle_name, last_name, date_of_birth, gender,
    social_security_number, insurance_number,
      civic_number, street_name, city, province, postal_code,
     phone_number, email_address, user_id)
VALUES ('${p.first_name}', '${p.middle_name}', '${p.last_name}', '${p.date_of_birth}', '${p.gender}',
    '${p.ssn}', '${p.insurance_number}',
      '${p.civic_number}', '${p.street_name}', '${p.city}', '${p.province}', '${p.postal_code}',
     '${p.phone_number}', '${p.email_address}', '${p.user_id}')
RETURNING patient_id`;
};
