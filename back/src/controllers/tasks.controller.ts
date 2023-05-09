import { Router } from 'express';
import { readFileSync } from 'fs';
import { Task } from '../types/task.type';

const router = Router();

router.get('/tasks', async (req, res, next) => {
  try {
    const users: Task[] = JSON.parse(readFileSync('../mock/tasks.json').toString());
    res.json({ users });
  } catch (error) {
    next(error);
  }
});
export default router;
