import {  Router } from 'express';

import {
    getStudentById,
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent
} from '../controllers/Students.controller.js';

const StudentRouter = Router();

StudentRouter.get('/', getStudents);
StudentRouter.get('/:id', getStudentById);
StudentRouter.post('/', createStudent);
StudentRouter.put('/:id', updateStudent);
StudentRouter.delete('/:id', deleteStudent);

export default StudentsRouter;