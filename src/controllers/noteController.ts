import { Request, Response } from 'express';
import pool from '../database';

export const getNotes = async (req: Request, res: Response) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM notes');
    conn.release();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

export const saveNote = async (req: Request, res: Response) => {
  const { note } = req.body;
  try {
    const conn = await pool.getConnection();
    await conn.query('INSERT INTO notes (note) VALUES (?)', [note]);
    conn.release();
    res.status(201).json({ message: 'Note saved' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const conn = await pool.getConnection();
    await conn.query('DELETE FROM notes WHERE id = ?', [id]);
    conn.release();
    res.json({ message: 'Note deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};
