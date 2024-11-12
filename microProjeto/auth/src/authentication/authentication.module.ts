import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { JwtTokenModule } from 'src/shared/jwtToken/jwt.module';
import { RestBaseModule } from 'src/shared/infra/datasource/typeorm.module';
import { BcryptJs } from 'src/shared/encrypter/Bcrypt.service';
import { BcryptModule } from 'src/shared/encrypter/Bcrypt.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/authentication.entity';

@Module({
  imports:[JwtTokenModule, RestBaseModule, BcryptModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
