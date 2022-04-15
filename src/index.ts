import express from 'express';
import patientsHandler from './handlers/patients/handler';
import appointmentsHandler from './handlers/appointments/handler';
import employeesHandler from './handlers/employees/handler';
import proceduresHandler from './handlers/procedures/handler';
import usersHandler from './handlers/users/handler';
import reviewsHandler from './handlers/reviews/handler';
import cors from 'cors';

const app = express();
const port = '8000';

app.use(cors());
app.use(express.json());
app.use('/patients', patientsHandler);
app.use('/appointments', appointmentsHandler);
app.use('/employees', employeesHandler);
app.use('/procedures', proceduresHandler);
app.use('/users', usersHandler);
app.use('/reviews', reviewsHandler);
app.get('/', (_, res) => {
	res.set('application/json').status(200).send('api in operation');
});

app.listen(port, () => {
	return console.log(`Server is listening on ${port}`);
});
