import { createStudent, getStudents } from '../models/studentModel.js';

export const addStudent = async (req, res) => {
  try {
    const { name, dob, gender } = req.body;

    const student = await createStudent(name, dob, gender);

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const fetchStudents = async (req, res) => {
  try {
    const students = await getStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};