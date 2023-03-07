import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entity/Users.entity';
import { UserResolver } from './user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UserResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
