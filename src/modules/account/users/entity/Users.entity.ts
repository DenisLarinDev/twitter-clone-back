import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255, nullable: false })
  name: string;

  @Column('varchar', { length: 255, nullable: false, unique: true })
  nickname: string;

  @Column('varchar', { length: 12, nullable: true, unique: true })
  phone: string;

  @Column('varchar', { length: 255, nullable: true, unique: true })
  email: string;

  @Column({ type: 'date', nullable: true })
  birthdate: Date;

  @Column('varchar', { length: 255, nullable: false })
  password: string;

  @Column('varchar', { length: 255, nullable: true })
  avatar: string;

  @BeforeInsert()
  beforeInsert() {
    this.id = uuidv4();
  }
}
