import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { UserEntity } from 'src/authentication/entities/authentication.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT) || 3306, // Certifique-se de que a porta está correta
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [UserEntity],
      synchronize: true,
      logging: true,
      // Require direto no atributo do driver:
      driver: require('mysql2'),
    }),
  ],
  exports: [TypeOrmModule],
})
export class RestBaseModule {}
