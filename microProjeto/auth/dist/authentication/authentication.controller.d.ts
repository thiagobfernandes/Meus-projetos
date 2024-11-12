import { AuthenticationService } from './authentication.service';
import { LoginDTO } from './dto/login.dto';
import { CreateUserDTO } from './dto/createUser.dto';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    create(loginDTO: LoginDTO): Promise<{
        access_token: string;
        token_type: string;
    }>;
    createuser(userData: CreateUserDTO): Promise<CreateUserDTO & import("./entities/authentication.entity").UserEntity>;
    remove(id: string): string;
}
