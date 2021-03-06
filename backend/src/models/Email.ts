import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reserve_account')
export default class Email {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
};
