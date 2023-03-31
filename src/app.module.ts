import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyController } from './Controller/facultyController.controller';
import { CustomExceptionFilter } from './coustom.exception.filter';
import { FacultyInfo } from './Entity/facultyInfo.entity';
import { FacultyService } from './Services/facultyService.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { AssignmentInfo } from './Entity/assignemntInfo.entity';
import { FacultyNotice } from './Entity/facultyNotice.entity';
import { StudentgradeInfo } from './Entity/studentgradeInfo.entity';
import { RequestRoom } from './Entity/requestRoom.entity';
import { FileUplode } from './Entity/fileUplode.entity';
import { NoticeService } from './Services/noticeservice.service';
import { AssignmentService } from './Services/assignmentservice.service';
import { StudentGradeService } from './Services/studentgradeservice.service';
import { RequestRoomService } from './Services/RequestRoomservice.service';
import { FileUplodeservice } from './Services/fileUplodeservice.service';
import { RequestRoomController } from './Controller/RequestRoomscontroller.controller';
import { AssignmentController } from './Controller/assignemntcontroller.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'kfahim2280@gmail.com',
          pass: 'gdbgoasutcuptbmd',
        },
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Advweb3',
      database: 'University-portal',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      FacultyInfo,
      FacultyNotice,
      AssignmentInfo,
      StudentgradeInfo,
      RequestRoom,
      FileUplode,
    ]),
  ],
  controllers: [FacultyController, RequestRoomController, AssignmentController],
  providers: [
    FacultyService,
    NoticeService,
    AssignmentService,
    StudentGradeService,
    RequestRoomService,
    FileUplodeservice,
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter,
    },
  ],
})
export class AppModule {}
