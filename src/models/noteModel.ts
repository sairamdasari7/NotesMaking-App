import pool from '../database';

interface Note {
  id?: number;
  note: string;
  created_at?: Date;
}

class NoteModel {
  async getAllNotes(): Promise<Note[]> {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM notes");
      return rows;
    } finally {
      if (conn) conn.release();
    }
  }

  async createNote(note: string): Promise<void> {
    let conn;
    try {
      conn = await pool.getConnection();
      await conn.query("INSERT INTO notes (note) VALUES (?)", [note]);
    } finally {
      if (conn) conn.release();
    }
  }

  async deleteNoteById(id: number): Promise<void> {
    let conn;
    try {
      conn = await pool.getConnection();
      await conn.query("DELETE FROM notes WHERE id = ?", [id]);
    } finally {
      if (conn) conn.release();
    }
  }
}

export default new NoteModel();
