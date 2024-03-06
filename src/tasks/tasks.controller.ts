import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "src/dto/create-task.dto";
import { UpdateTaskDto } from "src/dto/update-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    try {
      return await this.tasksService.findOne(id);
    } catch (error) {
      throw new NotFoundException("Task not found");
    }
  }

  @Post()
  async create(@Body() body: CreateTaskDto) {
    try {
      return await this.tasksService.create(body);
    } catch (error) {
      if (error.code === 11000)
        throw new ConflictException("Task already exists");
      throw error;
    }
  }

  @Delete(":id")
  @HttpCode(204)
  async delete(@Param("id") id: string) {
    try {
      return await this.tasksService.delete(id);
    } catch (error) {
      throw new NotFoundException("Task not found");
    }
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() body: UpdateTaskDto) {
    try {
      return await this.tasksService.update(id, body);
    } catch (error) {
      throw new NotFoundException("Task not found");
    }
  }
}
