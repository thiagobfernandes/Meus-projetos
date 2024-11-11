import { JwtService } from "@nestjs/jwt";

export class JWTtokenService {
    constructor(private readonly jwtService: JwtService) {}
    async generateToken(userId:number) {
        return this.jwtService.sign({
           payload:{
            id:userId
           },
        
        
        },
        {expiresIn:'7d'}
    )

    }

    async generateRefreshToken(userId:number) {
        return this.jwtService.sign(
            {
                payload:{
                    id:userId
                }
            },
            {expiresIn:'7d'}
        )
    }

    async verifytoken(token:string) {
        return this.jwtService.verify(token)
    }
    async validadeToken(token:string) {
        return this.jwtService.verify(token)
    }
    async decodeToken(token:string){
        return this.jwtService.decode(token)
    }

    async verifyAsynToken(token:string) {
        return this.jwtService.verifyAsync(token)
    }
}