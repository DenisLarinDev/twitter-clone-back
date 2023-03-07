import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
import { UserInput, UserLogin } from '../users/dto/user.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => UserDto)
  async registration(@Args('userData') userData: UserInput) {
    return await this.authService.registration(userData);
  }

  @Query(() => String)
  async login(@Args('userData') userData: UserLogin) {
    const user = await this.authService.login(userData);
    return await this.authService.createToken(user);
  }
}
