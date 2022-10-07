import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Usage {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  title: string;

  @Column()
  area: string;

  @Column()
  content: string;

  @Column()
  nickname: string;

  @Column()
  sort: string;

  @Column()
  period: string;

  @Column()
  goal: string;

  @Column()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
