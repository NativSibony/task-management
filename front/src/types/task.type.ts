export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  description?: string;
  assignee?: string;
  created: number | Date | undefined;
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
