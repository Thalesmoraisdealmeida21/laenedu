import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bootcamps')
export default class {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  bootcamp_name: string;

  @Column()
  description: string;
};
