import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('Management rooms')
  .setDescription('The rooms API description')
  .setVersion('1.0')
  .addTag('rooms')
  .build();
const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api/documentations', app, documentFactory);

app.enableCors({
  origin: 'http://localhost:3000',  // Frontend
});

  app.setGlobalPrefix('api')
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
