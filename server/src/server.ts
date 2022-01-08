import express from 'express';
import cors from 'cors';
import "reflect-metadata";

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
  res.send('Hello World!');
});

app.listen(3333,() => {
  console.log('Rodando.')
});