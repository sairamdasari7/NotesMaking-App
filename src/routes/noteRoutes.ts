import { Router } from 'express';
import { getNotes, saveNote, deleteNote } from '../controllers/noteController';

const router = Router();

router.get('/notes', getNotes);
router.post('/notes', saveNote);
router.delete('/notes/:id', deleteNote);

export default router;
