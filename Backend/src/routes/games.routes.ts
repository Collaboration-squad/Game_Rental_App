import * as Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ msg: 'games works' });
});

export const gamesRouter = router;
