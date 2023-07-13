import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
export declare class TasksController {
    private tasksServices;
    constructor(tasksServices: TasksService);
    getAllTasks(): import("./task.entity").Task[];
    createTask(newTask: CreateTaskDto): {
        id: string;
        title: string;
        description: string;
        status: import("./task.entity").TaskStatus;
    };
    deleteTask(id: string): void;
    updateTask(id: string, updatedFields: UpdateTaskDto): import("./task.entity").Task;
}
