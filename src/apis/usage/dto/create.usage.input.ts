import { Column } from 'typeorm';

export class CreateUsageInput {
  @Column()
  id: string;

  @Column()
  title: string;

  @Column()
  nickname: string;

  @Column()
  area: string;

  @Column()
  content: string;

  @Column({ default: true })
  createdAt: string;

  @Column()
  sort: string;

  @Column()
  period: string;

  @Column()
  goal: string;
}
