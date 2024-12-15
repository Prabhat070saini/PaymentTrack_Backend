import { Module } from '@nestjs/common';
import { LibModule } from './lib/lib.module';

@Module({
  imports: [LibModule]
})
export class CommonModule {}
