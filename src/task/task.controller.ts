import { Controller, Patch } from '@nestjs/common';
import { Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { TaskService } from './service/task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('Task')
export class TaskController {
    constructor(private tasksService: TaskService) {}
    @Get()
    async gettasks() {
        const tasks = await this.tasksService.getTasks();
        return tasks;
    }
    @Get(':taskId')
    async gettask(@Param('taskId') taskId) {
        const task = await this.tasksService.getTask(taskId);
        return task;
    }
    @Post()
    async addtask(@Body() createtaskDto: CreateTaskDto) {
        const task = await this.tasksService.addTask(createtaskDto);
        return task;
    }
    @Patch()
    async updatetask(@Body() updateTaskDto: UpdateTaskDto) {
        
        return await this.tasksService.updateTask(updateTaskDto);
    }
    @Delete()
    async deletetask(@Query() query) {
        const tasks = await this.tasksService.deleteTask(query.taskId);
        return tasks;
    }
}
