import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/')
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @Get('/:id')
  async getUserById(id: string) {
    return await this.usersService.getUserById(id);
  }

  @Get('/email/:email')
  async getUsersByEmail(email: string) {
    return await this.usersService.getUserByEmail(email);
  }

  @Get('/nickname/:nickname')
  async getUsersByNickName(nickname: string) {
    return await this.usersService.getUserByNickName(nickname);
  }

  @Post('/')
  async createUser(@Body() user: CreateUserDto) {
    return await this.usersService.createUser(user);
  }
}
