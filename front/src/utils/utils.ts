import { TaskStatus } from '../types/task.type';

export function getParsedDate(date: string | undefined) {
  if (!date) return '';

  const parsedDate = new Date(date);
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Australia/Sydney' }).format(
    parsedDate
  );
}

export function getStatusText(status: TaskStatus): string {
  switch (status) {
    case TaskStatus.ToDo:
      return 'To Do';
    case TaskStatus.InProgress:
      return 'In Progress';
    case TaskStatus.InQa:
      return 'In QA';
    case TaskStatus.Done:
      return 'Done';
    default:
      return '';
  }
}
