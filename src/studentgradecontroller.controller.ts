import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { StudentGradeService } from './Services/studentgradeservice.service';

@Controller('/studentgrade')
export class StudentGradeController {
  constructor(private readonly studentGradeService: StudentGradeService) {}

  
}
