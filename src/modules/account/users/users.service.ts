import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entity/Users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async getAllUsers() {
    return this.userRepository.find();
  }

  async getUserById(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  async getUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async getUserByPhone(phone: string) {
    return this.userRepository.findOne({ where: { phone } });
  }

  async getUserByNickName(nickname: string) {
    return this.userRepository.findOne({ where: { nickname } });
  }

  async createUser(user: CreateUserDto) {
    if (!user) throw new Error('User not found');
    let nickName = user?.nickname;
    let candidate: UsersEntity | null = null;
    if (!nickName) {
      nickName = 'nikname' + '_' + uuidv4();
    }
    if (user?.phone) {
      candidate = await this.getUserByPhone(user.phone);
    } else if (user?.email) {
      candidate = await this.getUserByEmail(user.email);
    }
    if (candidate) throw new Error('User already exists');

    const newUser = { ...user, nickname: nickName };
    console.log(newUser);
    return this.userRepository.save(newUser);
  }
}
