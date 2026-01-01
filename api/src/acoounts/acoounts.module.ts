import { Module } from '@nestjs/common';
import { AcoountsService } from './acoounts.service';
import { AcoountsController } from './acoounts.controller';

@Module({
  controllers: [AcoountsController],
  providers: [AcoountsService],
})
export class AcoountsModule {}
