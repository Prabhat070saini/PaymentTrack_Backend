import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './config/env.config'
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT=env.app.port||5000

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      enableDebugMessages: true,
    }),
  );

  app.setGlobalPrefix('api');
  app.enableVersioning({type:VersioningType.URI})
  app.enableCors({ origin: '*' });
  console.log(`PORT ${PORT}`);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
