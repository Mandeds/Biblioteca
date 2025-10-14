import express from 'express'
const api = express();
const PORT = 3001;

api.use(express.json());

api.listen(PORT, () => console.log('Subiu'));