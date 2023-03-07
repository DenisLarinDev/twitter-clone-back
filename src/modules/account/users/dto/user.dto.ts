import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserDto {
  @Field() id: string;
  @Field() name: string;
  @Field() nickname: string;
  @Field() phone: string;
  @Field() email: string;
  @Field({ nullable: true }) birthdate?: Date;
  @Field({ nullable: true }) avatar?: string;
}
