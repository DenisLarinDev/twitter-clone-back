import { Query, Resolver } from '@nestjs/graphql';
import { UsersEntity } from './entity/Users.entity';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/auth.guard';

@Resolver((of) => UsersEntity)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [UserDto])
  @UseGuards(GqlAuthGuard)
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
}
