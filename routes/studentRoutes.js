import express from 'express';
import { addStudent, fetchStudents } from '../controllers/studentController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', auth, addStudent);
router.get('/', auth, fetchStudents);

export default router;