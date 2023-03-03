export class CreateUserDto {
  name: string;
  nickname?: string;
  phone: string;
  email: string;
  birthdate: Date;
  password: string;
  avatar: string;
}
