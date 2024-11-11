import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { Env, envSchema } from './env/env';
import { JwtModule } from '@nestjs/jwt';
import { RestBaseModule } from './shared/infra/datasource/typeorm.module';
import { BcryptModule } from './shared/encrypter/Bcrypt.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [RestBaseModule,
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal:true,
    }),
    JwtModule.registerAsync({
      inject:[ConfigService],
      useFactory(config:ConfigService<Env, true>) {
        const secret = config.get('JWT_SECRET', {infer:true});
        return {
          secret
        };
      },
    }),
    AuthenticationModule,
BcryptModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
