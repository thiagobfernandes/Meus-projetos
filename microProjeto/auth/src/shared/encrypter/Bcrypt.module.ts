import { Module } from "@nestjs/common";
import { BcryptJs } from "./Bcrypt.service";

@Module({
    providers:[BcryptJs],
    exports:[BcryptJs]
})
export class BcryptModule {}