import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FacultyInfo } from './facultyInfo.entity';

@Entity('facultyNotice')
export class FacultyNotice {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  subject: string;

  @Column()
  Details: string;

}
