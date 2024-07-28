// src/routes/noteRoutes.mts
import express from 'express';
import { getNotes, saveNote, deleteNote } from '../controllers/noteController.mts';

const router = express.Router();

router.get('/', getNotes);
router.post('/', saveNote);
router.delete('/:id', deleteNote);

export default router;
