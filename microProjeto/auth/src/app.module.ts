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
  imports: [
    RestBaseModule,  // Ensure this is only imported once
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,  // Makes configuration globally available
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService<Env, true>) => {
        const secret = config.get<string>('JWT_SECRET'); // Explicitly typed
        if (!secret) {
          throw new Error('JWT_SECRET is not defined in environment variables');
        }
        return {
          secret,
          signOptions: { expiresIn: '1h' },  // Optional: Set expiration time for JWT
        };
      },
    }),
    AuthenticationModule,
    BcryptModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
