import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(process.env.JWT_SECRET_KEY);
  console.log(process.env.DATABASE_URL);
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
