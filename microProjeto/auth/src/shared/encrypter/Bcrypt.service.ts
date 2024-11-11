import { Injectable } from "@nestjs/common";
import { compare, hash } from "bcrypt";

@Injectable()
export class BcryptJs{
    async hash(password:string):Promise<string> {
        return await hash(password,8)
    }

    async compare(password:string, hash:string):Promise<Boolean>{
        return await compare(password,hash)
    }
}