/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { Delete } from '@nestjs/common/decorators';

@Controller('tasks')
export class TasksController {
 constructor(private tasksServices: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksServices.getAllTasks();
  }
  
  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksServices.createTasks(newTask.title, newTask.description); 
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.tasksServices.deleteTasks(id);
  }

  @Patch(":id")
  updateTask(@Param("id") id:string, @Body() updatedFields: UpdateTaskDto) {
  return this.tasksServices.updateTask(id, updatedFields);
  }
}
