import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcoountsModule } from './acoounts/acoounts.module';

@Module({
  imports: [AcoountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
