import Router from 'express';
import userController from '../controllers/users.controller.js';

const api = Router().use(userController);

export default Router().use('/api', api);
