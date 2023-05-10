import { Router } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { Task } from '../types/task.type';

const router = Router();

router.get('/tasks', async (req, res, next) => {
  try {
    const tasks: Task[] = JSON.parse(readFileSync('./mock/tasks.json').toString());
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get('/tasks/:id', async (req, res, next) => {
  try {
    const tasks: Task[] = JSON.parse(readFileSync('./mock/tasks.json').toString());
    const task = tasks.find((task) => task.id === parseInt(req.params.id));
    res.json(task ? task : { msg: 'Task not found' });
  } catch (error) {
    next(error);
  }
});

router.post('/tasks', async (req, res, next) => {
  try {
    const tasks: Task[] = JSON.parse(readFileSync('./mock/tasks.json').toString());
    if (req?.body) {
      tasks.push(req.body);
      writeFileSync('./mock/tasks.json', JSON.stringify(tasks));
      return res.json(tasks);
    }
    res.json({ msg: 'No data provided' });
  } catch (error) {
    next(error);
  }
});
export default router;
