import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssignmentDto } from 'src/DTO/assignmentDto.dto';
import { AssignmentInfo } from 'src/Entity/assignemntInfo.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AssignmentService {
  constructor(
    @InjectRepository(AssignmentInfo)
    private AssignmentRepo: Repository<AssignmentInfo>,
  ) {}

  getAssignment(): any {
    return this.AssignmentRepo.find();
  }

  getAssignmentById(id): any {
    return this.AssignmentRepo.findOne(id);
  }

  insertAssignment(assignmentdto: AssignmentDto): any {
    const assignment = new AssignmentInfo();
    assignment.courseId = assignmentdto.courseId;
    assignment.subject = assignmentdto.subject;
    assignment.Details = assignmentdto.Details;
    return this.AssignmentRepo.save(assignment);
  }

  updateAssignment(assignmentdto, id): any {
    return this.AssignmentRepo.update(id, assignmentdto);
  }

  updateAssignmentById(assignmentdto, id): any {
    return this.AssignmentRepo.update(id, assignmentdto);
  }

  deleteAssignment(id): any {
    return this.AssignmentRepo.delete(id);
  }
}
