import {  Router } from 'express';

import {
    getUserById,
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/users.controller.js';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default usersRouter;