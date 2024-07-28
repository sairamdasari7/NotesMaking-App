// src/controllers/noteController.mts
import { Request, Response } from 'express';
import pool from '../database.mts';

export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await pool.query('SELECT * FROM notes');
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Database query failed' });
  }
};

export const saveNote = async (req: Request, res: Response) => {
  const { note } = req.body;
  try {
    await pool.query('INSERT INTO notes (note) VALUES (?)', [note]);
    res.status(201).json({ message: 'Note saved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save note' });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM notes WHERE id = ?', [id]);
    res.status(200).json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
};
