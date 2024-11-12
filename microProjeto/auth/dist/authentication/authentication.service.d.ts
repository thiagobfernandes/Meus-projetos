import { UserDTO } from './dto/user.dto';
import { UserEntity } from './entities/authentication.entity';
import { LoginDTO } from './dto/login.dto';
import { Repository } from 'typeorm';
import { BcryptJs } from 'src/shared/encrypter/Bcrypt.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { JWTtokenService } from 'src/shared/jwtToken/jwt.service';
export declare class AuthenticationService {
    private readonly jwtService;
    private userRepository;
    private bcrypt;
    constructor(jwtService: JWTtokenService, userRepository: Repository<UserEntity>, bcrypt: BcryptJs);
    generateAcessToken(userId: number): Promise<string>;
    validateAcessToken(token: Partial<UserDTO>): Promise<any>;
    login(loginDTO: LoginDTO): Promise<{
        access_token: string;
        token_type: string;
    }>;
    createUser(userData: CreateUserDTO): Promise<CreateUserDTO & UserEntity>;
    remove(id: number): string;
}
