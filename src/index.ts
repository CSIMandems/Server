import express from 'express';
import patientsHandler from './handlers/patients/handler';
import appointmentsHandler from './handlers/appointments/handler';
import dentistsHandler from './handlers/dentists/handler';
import proceduresHandler from './handlers/procedures/handler';
import usersHandler from './handlers/users/handler';

const app = express();
const port = '8000';

app.use(express.json());
app.use('/patients', patientsHandler);
app.use('/appointments', appointmentsHandler);
app.use('/dentists', dentistsHandler);
app.use('/procedures', proceduresHandler);
app.use('/users', usersHandler);
app.get('/', (_, res) => {
	res.set('application/json').status(200).send('api in operation');
});

app.listen(port, () => {
	return console.log(`Server is listening on ${port}`);
});
