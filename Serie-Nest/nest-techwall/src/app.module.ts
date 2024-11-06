import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { FirstMiddleware } from './middlewares/first/first.middleware';
import { logger } from './middlewares/logger.middleware';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer) {
    // CUSTOM ROUTE FOR MIDDLEWARE
    consumer.apply(FirstMiddleware, logger).forRoutes(
      'hello',
      {
        path: 'todo',
        method: RequestMethod.GET,
      },
      {
        path: 'todo*',
        method: RequestMethod.DELETE,
      }
    );
  }

}
