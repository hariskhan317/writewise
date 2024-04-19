import { Router } from 'express';
import { getAllUsers, userSignin, userLogin } from '../controllers/user-controllers.js'

const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.post('/signin', userSignin);
userRoutes.post('/login', userLogin);

export default userRoutes;