import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { FacultyInfo } from 'src/Entity/facultyInfo.entity';
import { FacultyInfoDTO } from 'src/DTO/facultyInfo.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(FacultyInfo)
    private facultyRepo: Repository<FacultyInfo>,
  ) {}

  async insertFaculty(facultydto: FacultyInfoDTO): Promise<any> {
    const faculty = new FacultyInfo();
    faculty.Fname = facultydto.Fname;
    faculty.Fdep = facultydto.Fdep;
    faculty.Fprogram = facultydto.Fprogram;
    faculty.Faddress = facultydto.Faddress;
    faculty.Fnum = facultydto.Fnum;
    faculty.dob = facultydto.dob;
    faculty.Fsal = facultydto.Fsal;
    faculty.Femail = facultydto.Femail;
    faculty.Fpass = facultydto.Fpass;
    const salt = await bcrypt.genSalt();
    const hassedpassed = await bcrypt.hash(facultydto.Fpass, salt);
    faculty.Fpass = hassedpassed;
    return this.facultyRepo.save(faculty);
  }

  getFacultyById(id): any {
    return this.facultyRepo.findOneBy(id);
  }

  getFaculty(): any {
    return this.facultyRepo.find();
  }

  updateFaculty(facultydto, id): any {
    return this.facultyRepo.update(id, facultydto);
  }

  deleteFaculty(id): any {
    return this.facultyRepo.delete(id);
  }
}
