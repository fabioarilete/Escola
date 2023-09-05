import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { \[tasks\]Controller } from './[tasks/]/[tasks/].controller';
import { TasksController } from './tasks/tasks.controller';

@Module({
  imports: [],
  controllers: [AppController, \[tasks\]Controller, TasksController],
  providers: [AppService],
})
export class AppModule {}
