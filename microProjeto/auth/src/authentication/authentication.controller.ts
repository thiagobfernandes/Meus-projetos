import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateAuthenticationDto } from './dto/create-authentication.dto';
import { UpdateAuthenticationDto } from './dto/update-authentication.dto';
import { LoginDTO } from './dto/login.dto';
import { CreateUserDTO } from './dto/createUser.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post()
  async create(@Body() loginDTO: LoginDTO) {
    return await this.authenticationService.login(loginDTO)
  }

  @Post('/create')
 async createuser(@Body() userData: CreateUserDTO) {
    return await this.authenticationService.createUser(userData)
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authenticationService.remove(+id);
  }
}
