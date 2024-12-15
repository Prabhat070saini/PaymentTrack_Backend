import { Module } from '@nestjs/common';
import { BillDetailsController } from './bill-details.controller';
import { BillDetailsService } from './bill-details.service';

@Module({
  controllers: [BillDetailsController],
  providers: [BillDetailsService]
})
export class BillDetailsModule {}
