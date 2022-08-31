import { TaskDto } from "./base-task.dto";

export class CreateTaskDto extends TaskDto {
    createdAt: Date
}