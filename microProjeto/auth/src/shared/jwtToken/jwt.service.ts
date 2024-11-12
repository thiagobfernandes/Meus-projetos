import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JWTtokenService {
    constructor(private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) {}
    generateToken(userId: number) {
        const payload = { userId };
        const secret = this.configService.get<string>('JWT_SECRET'); // Access secret from environment variables
        return this.jwtService.sign(payload, { secret }); // Signing with the secret
      }

    // async generateRefreshToken(userId:number) {
    //     return this.jwtService.sign(
    //         {
    //             payload:{
    //                 id:userId
    //             }
    //         },
    //         {expiresIn:'7d'}
    //     )
    // }

    async verifytoken(token:string) {
        return await this.jwtService.verify(token)
    }
    async validadeToken(token:string) {
        return await this.jwtService.verify(token)
    }
    async decodeToken(token:string){
        return await this.jwtService.decode(token)
    }

    async verifyAsynToken(token:string) {
        return await this.jwtService.verifyAsync(token)
    }
}