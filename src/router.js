import Router from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const router = new Router();

router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);

router.use(authMiddleware);
router.put('/users', UserController.update);

export default router;
