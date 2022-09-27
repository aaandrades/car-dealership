import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use global pipes - ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove extra info to DTOs
      forbidNonWhitelisted: true, // Throw error when there's extra info in DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
