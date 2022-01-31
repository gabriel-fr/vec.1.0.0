import express from 'express';
import cors from 'cors';
import "reflect-metadata";

import './database/connection';
import vecRoutes from './routes/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(vecRoutes);

app.get('/',(req, res) => {
  res.send('Hello World!');
});

app.listen(3333,() => {
  console.log('Rodando.')
});