import { Task, TaskStatus } from './task.entity';
import { UpdateTaskDto } from './dto/task.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTasks(title: string, description: string): {
        id: string;
        title: string;
        description: string;
        status: TaskStatus;
    };
    updateTask(id: string, updatedFields: UpdateTaskDto): Task;
    getTasksById(id: string): Task;
    deleteTasks(id: string): void;
}
