/* eslint-disable prettier/prettier */
import { TaskStatus } from '../task.entity';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    description: string;
}

export class UpdateTaskDto {
    @IsOptional()
    title?: string;
    @IsOptional()
    description?: string;
    @IsOptional()
    status?: TaskStatus;
  }