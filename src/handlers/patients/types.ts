export interface Patient {
	first_name: string;
	middle_name: string;
	last_name: string;
	date_of_birth: string;
	gender: string;
	ssn: string;
	insurance_number: number;
	civic_number: number;
	street_name: string;
	city: string;
	province: string;
	postal_code: string;
	phone_number: string;
	email_address: string;
	user_id: number;
	responsible_party_id: number | null;
}
