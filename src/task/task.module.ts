import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './service/task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './schemas/task.schema'
import { TaskRepository } from './repositories/task.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers:
    [
      TaskService,
      TaskRepository
    ]
})
export class TaskModule { }
