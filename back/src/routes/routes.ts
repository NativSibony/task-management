import Router from 'express';
import userController from '../controllers/users.controller.js';
import tasksController from '../controllers/tasks.controller.js';

const api = Router().use(userController).use(tasksController);

export default Router().use('/api', api);
