import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApisModule } from './apis/apis.module';
import { CommonModule } from './common/common.module';
// import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [ApisModule, CommonModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
