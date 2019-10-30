import Router from 'express';

const router = new Router();

router.get('/', (req, res) => res.json({ hello: 'oi ' }));

export default router;
