import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './srp/order/order.module';
import { ProductModule } from './srp/product/product.module';
import { UserModule } from './srp/user/user.module';
import { GreeterController } from './ocp/greeter/greeter.controller';
import { GreeterModule } from './ocp/greeter/greeter.module';

@Module({
  imports: [OrderModule, ProductModule, UserModule, GreeterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
