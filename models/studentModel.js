import pool from '../config/db.js';

export const createStudent = async (name, dob, gender) => {
  const result = await pool.query(
    'INSERT INTO students(name,dob,gender) VALUES($1,$2,$3) RETURNING *',
    [name, dob, gender]
  );
  return result.rows[0];
};

export const getStudents = async () => {
  const result = await pool.query('SELECT * FROM students');
  return result.rows;
};