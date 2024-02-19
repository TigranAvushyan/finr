import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'finance_unity' })
export class FinanceUnityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  tags: string;

  @Column()
  userId: number;

  @ManyToMany(() => FinanceUnityEntity)
  @JoinTable()
  children?: FinanceUnityEntity[];
}
