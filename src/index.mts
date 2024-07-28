// src/index.mts
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import noteRoutes from './routes/noteRoutes.mts';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/notes', noteRoutes);
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
