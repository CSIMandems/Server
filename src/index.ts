import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || '8000';

app.use(cors);
app.use(express.json);
app.get('/ping', (req, res) => {
	res.set('text/plain').status(200).send('pong');
});

app.listen(port, () => {
	return console.log(`Server is listening on ${port}`);
});
