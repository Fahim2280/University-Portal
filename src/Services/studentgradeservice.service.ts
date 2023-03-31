import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentgradeDTO } from "src/DTO/studentgradeDto.dto";
import { StudentgradeInfo } from "src/Entity/studentgradeInfo.entity";
import { Repository } from "typeorm";


@Injectable()
export class StudentGradeService {
  constructor(
    @InjectRepository(StudentgradeInfo)
    private sutdentGradeRepo: Repository<StudentgradeInfo>,
  ) { }
  
  getStudentGrade(): any {
    return this.sutdentGradeRepo.find();
  }

  insertStudentGrade(studentgradedto: StudentgradeDTO): any {
    const studentgrade = new StudentgradeInfo();
    studentgrade.studentId = studentgradedto.studentId;
    studentgrade.curseId = studentgradedto.curseId;
    studentgrade.subject = studentgradedto.subject;
    studentgrade.grade = studentgradedto.grade;
    return this.sutdentGradeRepo.save(studentgrade);
  }

  updateStudentGrade(studentgradedto, id): any {
    return this.sutdentGradeRepo.update(id, studentgradedto);
  }

  updateStudentGradeById(studentgradedto, id): any {
    return this.sutdentGradeRepo.update(id, studentgradedto);
  }

  deleteStudentGrade(id): any {
    return this.sutdentGradeRepo.delete(id);
  }

}