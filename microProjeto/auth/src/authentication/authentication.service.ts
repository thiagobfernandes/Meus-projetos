import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthenticationDto } from './dto/create-authentication.dto';
import { UpdateAuthenticationDto } from './dto/update-authentication.dto';
import { UserDTO } from './dto/user.dto';
import { UserEntity } from './entities/authentication.entity';
import { LoginDTO } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExceptionErrorDTO } from 'src/HttpResponse/exception';
import { HTTPenum } from 'src/HttpResponse/http.enum';
import { BcryptJs } from 'src/shared/encrypter/Bcrypt.service';
import { BcryptModule } from 'src/shared/encrypter/Bcrypt.module';
import { CreateUserDTO } from './dto/createUser.dto';
import { JWTtokenService } from 'src/shared/jwtToken/jwt.service';

@Injectable()
export class AuthenticationService {
  constructor(private readonly jwtService:JWTtokenService,
    @InjectRepository(UserEntity) private userRepository:Repository<UserEntity>,
    private bcrypt:BcryptJs
  ) {}
  generateAcessToken(user:Partial<UserDTO>) {
    return this.jwtService.generateToken(user.id_user)
    //ira receber do microservico de usuarios o dados para gerar o acess token
  }

  validateAcessToken(token:Partial<UserDTO>) {
    return this.jwtService.validadeToken(token.token)
  }

 async login(loginDTO:LoginDTO) {

    const user =  await this.userRepository.findOne({
      where: {
        email:loginDTO.email
      }, select:{
        password:true
      }

    })
    
      if(!user){
         throw new ExceptionErrorDTO(HttpStatus.BAD_REQUEST,'User not found');
      }
      const isMatch = this.bcrypt.compare(loginDTO.password,user.password)
      if(!isMatch){
        throw new ExceptionErrorDTO(HttpStatus.UNAUTHORIZED, 'Email or Password invalid!')
      }

      const acessToken =  await this.generateAcessToken(user)
      return acessToken
  }

 async createUser(userData:CreateUserDTO) {
     userData.password =await this.bcrypt.hash(userData.password)
    return await this.userRepository.save(userData)
    
  
  }

  remove(id: number) {
    return `This action removes a #${id} authentication`;
  }
}
