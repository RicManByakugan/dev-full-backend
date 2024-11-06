import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller("first")
export class AppController {
  constructor(
    private configService: ConfigService,
    private readonly appService: AppService) {}

  @Get("hello")
  getHello(): string {
    this.configService.get("APP_PORT");
    return this.appService.getHello();
  }
}
