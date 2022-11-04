/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 256, type: 'varchar' })
  name: string;

  @Column({ nullable: false, length: 256, type: 'varchar' })
  type: string[] = [];
}
