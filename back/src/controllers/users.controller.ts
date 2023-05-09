import { Router } from 'express';
import { User } from '../types/user.type';
import { readFileSync } from 'fs';

const router = Router();

router.get('/users', async (req, res, next) => {
  try {
    const users: User[] = JSON.parse(readFileSync('./mock/users.json').toString());
    res.json(users);
  } catch (error) {
    next(error);
  }
});

export default router;
