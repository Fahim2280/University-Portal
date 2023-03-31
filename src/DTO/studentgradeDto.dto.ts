import { IsAlpha, IsInt, IsNotEmpty } from 'class-validator';

export class StudentgradeDTO {
  id: number;

  @IsNotEmpty()
  @IsInt({ message: 'ID must be a number' })
  studentId: number;

  @IsNotEmpty()
  @IsInt({ message: 'ID must be a number' })
  curseId: number;

  @IsNotEmpty()
  @IsAlpha()
  subject: string;

  @IsNotEmpty()
  grade: string;
}
