import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './src/routes/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(routes);
// app.use(errorController);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
