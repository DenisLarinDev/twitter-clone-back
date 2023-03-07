import { Module } from '@nestjs/common';
import { TypeOrmConfig } from './config/TypeOrm.config';
import { UsersModule } from './modules/account/users/users.module';
import { JwtStrategy } from './modules/account/auth/auth.strategy';
import { GraphQLConfig } from './config/GraphQL.config';
import { AuthModule } from './modules/account/auth/auth.module';

@Module({
  imports: [TypeOrmConfig, GraphQLConfig, UsersModule, AuthModule],
  providers: [JwtStrategy],
})
export class AppModule {}
