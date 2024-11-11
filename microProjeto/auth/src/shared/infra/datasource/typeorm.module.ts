import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config'
import { UserEntity } from 'src/authentication/entities/authentication.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [UserEntity],
  
      synchronize: false,
      logging: true,
    }),
  ],
  exports: [TypeOrmModule], 
})
export class RestBaseModule {

}
