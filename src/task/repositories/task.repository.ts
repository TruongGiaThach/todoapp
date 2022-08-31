import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';
import { Model, FilterQuery, UpdateQuery } from 'mongoose'
@Injectable()
export class TaskRepository {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) { }
    public async create(task: Task): Promise<Task> {
        console.log(task);

        return await new this.taskModel(task).save();
    }

    public async findAll(taskFilterQuery: FilterQuery<Task>): Promise<Task[]> {
        return await this.taskModel.find(taskFilterQuery).populate(['author']);
    }

    public async findOne(taskFilterQuery: FilterQuery<Task>): Promise<Task> {
        return await this.taskModel.findOne(taskFilterQuery).populate(['author', 'id']);
    }

    public async updateOne(task): Promise<Task> {
        return await this.taskModel.findOneAndUpdate(
            {id: task._id},
            task,
            {
                upsert: false
            }
        ).populate(['author']);
    }

    public async deleteById(taskId: string): Promise<any> {
        // return await this.taskModel.findByIdAndDelete(taskId);
        return await this.taskModel.deleteOne({ id: taskId })
    }

}