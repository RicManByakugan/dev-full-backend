import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './srp/order/order.module';
import { ProductModule } from './srp/product/product.module';

@Module({
  imports: [OrderModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
