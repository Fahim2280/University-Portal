import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('RequestRoom')
export class RequestRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  room: string;

  @Column()
  reason: string;

  @Column()
  date: Date;

  @Column()
  time: Date;
}
