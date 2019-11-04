import Router from 'express';
import User from './app/models/User';

const router = new Router();

router.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Bruno Bertolani',
    email: 'bruno@bruno.com.br',
    password_has: '123123123',
  });

  return res.json(user);
});

export default router;
