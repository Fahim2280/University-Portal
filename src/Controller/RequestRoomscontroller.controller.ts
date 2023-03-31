import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RequestRoomService } from 'src/Services/RequestRoomservice.service';
import { RequestRoomDto } from 'src/DTO/requestRoomDto.dto';

@Controller('/requestroom')
export class RequestRoomController {
  constructor(private readonly requestRoomService: RequestRoomService) {}

  @Post('/insert')
  @UsePipes(new ValidationPipe())
  insertRequestRoom(@Body() requestRoomDto: RequestRoomDto) {
    return this.requestRoomService.insertRequestRoom(requestRoomDto);
  }

  @Get('/get')
  getRequestRoom(): any {
    return this.requestRoomService.getRequestRoom();
  }

  @Get('/get/:id')
  getRequestRoomById(@Param('id', ParseIntPipe) id: number): any {
    return this.requestRoomService.getRequestRoomById(id);
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  updateRequestRoom(
    @Body() requestRoomDto: RequestRoomDto,
    @Param('id', ParseIntPipe) id: RequestRoomDto,
  ) {
    return this.requestRoomService.updateRequestRoom(requestRoomDto, id);
  }

  @Put('/updateById/:id')
  @UsePipes(new ValidationPipe())
  updateRequestRoomById(
    @Body() requestRoomDto: RequestRoomDto,
    @Param('id', ParseIntPipe) id: RequestRoomDto,
  ) {
    return this.requestRoomService.updateRequestRoomById(requestRoomDto, id);
  }

  @Delete('/delete/:id')
  deleteRequestRoom(@Param('id', ParseIntPipe) id: RequestRoomDto) {
    return this.requestRoomService.deleteRequestRoom(id);
  }
}
