import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000; // Heroku will need the PORT environment variable

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => console.log(`Server is listening to ${port}.`));
