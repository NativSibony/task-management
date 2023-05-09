import { Task } from '../types/task.type';

export const allTasks: Task[] = [
  {
    id: 1,
    title: 'Do my homework',
    status: 0,
    created: new Date(),
    assignee: 'Nativ',
    linked_tasks: [
      {
        id: 2,
        title: 'Clean my room',
        status: 3,
        created: new Date(),
        assignee: 'Adam',
      },
    ],
  },
  {
    id: 2,
    title: 'Take the dog',
    status: 3,
    created: new Date(),
    assignee: 'Adam',
    linked_tasks: [],
  },
  {
    id: 3,
    title: 'Clean my room',
    status: 1,
    created: new Date(),
    assignee: 'Danielle',
    linked_tasks: [],
  },
  {
    id: 4,
    title: 'Wash my car',
    status: 2,
    created: new Date(),
    assignee: 'Roy',
    linked_tasks: [],
  },
];

export const firstTask: Task = {
  id: 1,
  title: 'Do my homework',
  status: 0,
  created: new Date(),
  assignee: 'Nativ',
  linked_tasks: [
    {
      id: 2,
      title: 'Clean my room',
      status: 3,
      created: new Date(),
      assignee: 'Adam',
    },
  ],
  description:
    "To live is to risk it all. Otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.",
};
