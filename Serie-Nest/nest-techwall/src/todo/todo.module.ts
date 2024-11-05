import { Global, Module } from '@nestjs/common';
import { TodoController } from './todo.controller';

// MODULE GLOBAL
@Global()
@Module({
  controllers: [TodoController]
})
export class TodoModule {}
