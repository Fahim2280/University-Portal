import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AssignmentService } from '../Services/assignmentservice.service';

@Controller('/assignment')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Get('/getAllAssignments')
  getAllAssignments() {
    return this.assignmentService.getAssignment();
  }

  @Get('/getAssignmentById/:id')
  getAssignmentById(@Param('id', ParseIntPipe) id: number) {
    return this.assignmentService.getAssignmentById(id);
  }

  @Post('/createAssignment')
  @UsePipes(ValidationPipe)
  insertAssignment(@Body() body: any) {
    return this.assignmentService.insertAssignment(body);
  }

  @Put('/updateAssignment/:id')
  @UsePipes(ValidationPipe)
  updateAssignment(@Body() body: any, @Param('id', ParseIntPipe) id: number) {
    return this.assignmentService.updateAssignment(body, id);
  }

  @Put('/updateAssignmentById/:id')
  @UsePipes(ValidationPipe)
  updateAssignmentById(@Body() body: any, @Param('id', ParseIntPipe) id: number) {
    return this.assignmentService.updateAssignmentById(body, id);
  }

  @Delete('/deleteAssignment/:id')
  deleteAssignment(@Param('id', ParseIntPipe) id: number) {
    return this.assignmentService.deleteAssignment(id);
  }
}
