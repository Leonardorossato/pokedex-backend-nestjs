import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 200, type: 'varchar' })
  name: string;

  @Column({ nullable: false, length: 200, type: 'varchar', unique: true })
  email: string;

  @Column({ nullable: false, length: 200, type: 'varchar' })
  password: string;
}
