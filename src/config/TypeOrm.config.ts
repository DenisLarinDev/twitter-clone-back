import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../modules/account/users/entity/Users.entity';

export const TypeOrmConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'main',
  password: 'main',
  database: 'main',
  entities: [UsersEntity],
  synchronize: true,
});
