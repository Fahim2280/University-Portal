import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { NoticeDto } from "src/DTO/noticeDto.dto";
import { FacultyNotice } from "src/Entity/facultyNotice.entity";
import { MailerService } from '@nestjs-modules/mailer/dist';
import { Repository } from 'typeorm';


@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(FacultyNotice)
   private NoticeRepo: Repository<FacultyNotice>,
    private MailerService: MailerService
  ) {}

  getNotice(): any {
    return this.NoticeRepo.find();
  }
  
  insertNotice(noticedto: NoticeDto): any {
    return this.NoticeRepo.save(noticedto);
  }

  updateNotice(noticedto, id): any {
    return this.NoticeRepo.update(id, noticedto);
  }

  updateNoticeById(noticedto, id): any {
    return this.NoticeRepo.update(id, noticedto);
  }

  deleteNotice(id): any {
    return this.NoticeRepo.delete(id);
  }

  async sendEmail(mydata) {
    return await this.MailerService.sendMail({
      from: 'kfahim2280@gmail.com',
      to: 'iftekharasef18@gmail.com',
      subject: mydata.subject,
      text: mydata.text,
    });
  }
}


