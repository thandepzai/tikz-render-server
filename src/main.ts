import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Cho phép tất cả các nguồn
    methods: 'GET, POST, PUT, DELETE, OPTIONS', // Cho phép các phương thức này
    allowedHeaders: '*', // Cho phép tất cả headers
    credentials: true, // Cho phép chia sẻ cookie và thông tin xác thực
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
