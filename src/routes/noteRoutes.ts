import express from 'express';
import { getNotes, saveNote, deleteNote } from '../controllers/noteController.js';

const router = express.Router();

router.get('/', getNotes);
router.post('/', saveNote);
router.delete('/:id', deleteNote);

export default router;
