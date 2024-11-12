import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
export declare class JWTtokenService {
    private readonly jwtService;
    private readonly configService;
    constructor(jwtService: JwtService, configService: ConfigService);
    generateToken(userId: number): string;
    verifytoken(token: string): Promise<any>;
    validadeToken(token: string): Promise<any>;
    decodeToken(token: string): Promise<any>;
    verifyAsynToken(token: string): Promise<any>;
}
