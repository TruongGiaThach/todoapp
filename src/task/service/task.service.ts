import { Injectable, HttpException } from '@nestjs/common';
import { TASKS } from '../dto/task.mock';
import { Model } from 'mongoose';
import { Task, TaskDocument, TaskSchema } from '../schemas/task.schema';
import { InjectModel } from '@nestjs/mongoose';
import { TaskRepository } from '../repositories/task.repository';


@Injectable()
export class TaskService {
    constructor(
        private readonly taskRepository: TaskRepository,
    ) { }
    tasks = TASKS;
    public async getTasks(): Promise<any> {
        return await this.taskRepository.findAll({
        });
    }

    public async getTask(taskId): Promise<any> {
        return new Promise(async resolve => {
            const _task = await this.taskRepository.findOne({
                id: taskId,
            });
            resolve(_task);
        });
    }
    public async addTask(task): Promise<any> {
        task.createdAt = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        return await this.taskRepository.create(task);
    }
    public async updateTask(task): Promise<any> {
        task.updateAt = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        return await this.taskRepository.updateOne(task);
    }

    async deleteTask(taskId): Promise<any> {
        return await this.taskRepository.deleteById(taskId);
    }
}

