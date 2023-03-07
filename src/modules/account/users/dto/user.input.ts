import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field() name: string;
  @Field() nickname: string;
  @Field() phone: string;
  @Field() email: string;
  @Field({ nullable: true }) birthdate?: Date;
  @Field() password: string;
  @Field({ nullable: true }) avatar?: string;
}

@InputType()
export class UserLogin {
  @Field({ nullable: true }) email: string;
  @Field({ nullable: true }) phone: string;
  @Field() password: string;
}
