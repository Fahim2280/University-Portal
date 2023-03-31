import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('facultyinfo')
export class FacultyInfo {
    @PrimaryGeneratedColumn()
    Fid: number;

    @Column()
    Fname: string;

    @Column()
    Fprogram: string;

    @Column()
    Fdep: string;

    @Column()
    Faddress: string;

    @Column()
    Fnum: number;

    @Column()
    dob: Date;

    @Column()
    Fsal: number;

    @Column()
    Femail: string;

    @Column()
    Fpass: string;
}