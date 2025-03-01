import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskPriority } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create(createTaskDto);

    return await this.taskRepository.save(task);
  }

  async findAllTasks(priority?: TaskPriority): Promise<Task[]> {
    const whereCondition: Record<string, any> = {};

    if (priority) {
      whereCondition.priority = priority;
    }

    return await this.taskRepository.find({ where: whereCondition });
  }

  async findTaskById(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findTaskById(id);

    Object.assign(task, updateTaskDto);

    return await this.taskRepository.save(task);
  }

  async deleteTask(id: number): Promise<boolean> {
    await this.taskRepository.delete(id);

    return true;
  }
}
