import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserInput, UserLogin } from '../users/dto/user.input';
import { UserDto } from '../users/dto/user.dto';
import { UsersEntity } from '../users/entity/Users.entity';
import { use } from 'passport';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async registration(userData: UserInput) {
    return await this.userService.createUser(userData);
  }

  async login(userData: UserLogin): Promise<Omit<UserDto, 'password'>> {
    if (!userData) throw new Error('User not found');
    let currentUser: UsersEntity | null = null;
    if (userData.phone) {
      currentUser = await this.userService.getUserByPhone(userData.phone);
    } else if (userData.email) {
      currentUser = await this.userService.getUserByEmail(userData.email);
    }
    if (!currentUser) throw new Error('User not found');
    if (currentUser.password !== userData.password) {
      throw new Error('Password is incorrect');
    }
    const { password, ...result } = currentUser;
    return result;
  }

  async createToken(user: Omit<UserDto, 'password'>) {
    const payload = {
      id: user.id,
      email: user.email,
      phone: user.phone,
      nickname: user.nickname,
    };
    return this.jwtService.sign(payload);
  }
}
