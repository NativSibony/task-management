import { TasksRepository } from '../services/repositories/tasksRepository';
import { Task } from '../types/task.type';

const tasksRepository = new TasksRepository();

export const getTasks = async () => {
  try {
    return await tasksRepository.get('/tasks');
  } catch (error) {
    console.log(error);
  }
};

export const getTask = async (id: number) => {
  try {
    return await tasksRepository.get(`/tasks/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    return await tasksRepository.get('/users');
  } catch (error) {
    console.log(error);
  }
};

export const createNewTask = async (task: Task) => {
  try {
    return await tasksRepository.post('/tasks', task);
  } catch (error) {
    console.log(error);
  }
};
