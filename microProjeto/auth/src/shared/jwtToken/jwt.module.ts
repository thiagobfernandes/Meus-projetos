import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Para importar o módulo JwtModule
import { JWTtokenService } from './jwt.service';

@Module({
  imports: [JwtModule],  // Importa o JwtModule para o JWTtokenService funcionar
  providers: [JWTtokenService],  // Adiciona o JWTtokenService ao providers
  exports: [JWTtokenService],  // Exporta o serviço para outros módulos
})
export class JwtTokenModule {}
