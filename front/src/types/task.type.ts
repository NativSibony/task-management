export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  description?: string | undefined;
  assignee?: string;
  created: string;
  linked_tasks?: Task[];
};

export enum TaskStatus {
  ToDo,
  InProgress,
  InQa,
  Done,
}

export enum TaskIcon {
  plus,
  check,
}
