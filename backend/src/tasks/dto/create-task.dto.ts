export class CreateTaskDto {
  title: string;
  description: string;
  status: string;
  priority: string;
  tags: string[];
  dueDate: string;
}
