import { Module } from '@nestjs/common';
import { TypeOrmConfig } from './config/TypeOrm.config';
import { UsersModule } from './modules/account/users/users.module';

@Module({
  imports: [TypeOrmConfig, UsersModule],
})
export class AppModule {}
