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
import { FacultyInfoDTO } from 'src/DTO/facultyInfo.dto';
import { FacultyService } from 'src/Services/facultyService.service';

@Controller('/faculty')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Post('/insert')
  @UsePipes(new ValidationPipe())
  insertFaculty(@Body() facultydto: FacultyInfoDTO) {
    return this.facultyService.insertFaculty(facultydto);
  }

  @Get('/get')
  getFaculty(): any {
    return this.facultyService.getFaculty();
  }

  @Get('/get/:id')
  getFacultyById(@Param('id', ParseIntPipe) id: number): any {
    return this.facultyService.getFacultyById(id);
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  updateFaculty(
    @Body() facultydto: FacultyInfoDTO,
    @Param('id', ParseIntPipe) id: FacultyInfoDTO,
  ) {
    return this.facultyService.updateFaculty(facultydto, id);
  }

  @Delete('/delete/:id')
  @UsePipes(new ValidationPipe())
  deleteFaculty(@Param('id', ParseIntPipe) id: FacultyInfoDTO) {
    return this.facultyService.deleteFaculty(id);
  }
}
