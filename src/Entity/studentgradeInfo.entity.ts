import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('studentgradeInfo')
export class StudentgradeInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentId: number;

  @Column()
  curseId: number;

  @Column()
  subject: string;

  @Column()
  grade: string;
}
