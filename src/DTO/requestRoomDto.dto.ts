import { IsAlpha, IsInt, IsNotEmpty } from "class-validator";

export class RequestRoomDto {
  id: number;

  @IsNotEmpty()
  room: string;

  @IsNotEmpty()

  reason: string;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  time: Date;

}