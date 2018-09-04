import * as Express from 'express';
import { controller } from '../controllers/user.controller';

const router = Express.Router();
router.post('/', controller.createUser.bind(controller))
router.post('/login', controller.getUser.bind(controller))


export const userRouter = router;