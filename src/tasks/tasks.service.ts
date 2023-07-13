/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid'
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    // simula base de datos 
 private tasks: Task[] = [
        {
            id: '1',
            title: 'first task',
            description: 'history task',
            status: TaskStatus.PENDING,
        },
    ];

    getAllTasks() {
       return this.tasks;
    }
    createTasks(title: string, description: string) { 
      const task = {
        id: v4(),
        title,
        description,
        status: TaskStatus.PENDING,
      }
      this.tasks.push(task);

      return task;
    }
    updateTask(id: string, updatedFields: UpdateTaskDto) : Task {
      const task = this.getTasksById(id);
      const newTask = Object.assign(task, updatedFields);
      this.tasks = this.tasks.map(task => task.id === id ? newTask : task);
      return newTask;
    }
     
    getTasksById(id: string): Task {
      return this.tasks.find(task => task.id === id);
    }
    
    deleteTasks(id:string) { 
     this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
