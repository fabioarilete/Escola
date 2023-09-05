import { Controller, Get, Req, Post } from '@nestjs/common';
import { Request } from 'express';

@Controller('tasks')
export class TasksController {
  @Post()
  create(): string {
    return 'This action adds a new task';
  }

  @Get()
  findAll(@Req() r: Request): string {
    return 'This actions returns all tasks';
  }
}
