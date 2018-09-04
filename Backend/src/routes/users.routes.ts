import * as Express from 'express';
import { controller } from '../controllers/user.controller';

const router = Express.Router();

router.get('/', controller.getUser)


export const userRouter = router;