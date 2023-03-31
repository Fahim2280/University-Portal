import {
  IsAlpha,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPhoneNumber,
  Length,
  Matches,
} from 'class-validator';

export class FacultyInfoDTO {
  Fid: number;

  @IsNotEmpty()
  @IsAlpha()
  Fname: string;

  @IsNotEmpty()
  @IsAlpha()
  Fprogram: string;

  @IsNotEmpty()
  @IsAlpha()
  Fdep: string;

  @IsNotEmpty()
  @IsAlpha()
  Faddress: string;

  @IsNotEmpty()
  @IsPhoneNumber('BD', { message: 'Phone number is not valid' })
  Fnum: number;

  @IsNotEmpty()
  dob: Date;

  @IsNotEmpty()
  Fsal: number;

  @IsNotEmpty()
  @IsEmail()
  Femail: string;

  @IsNotEmpty()
  @Length(8, 20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: 'Password is too weak',
  })
  Fpass: string;
}
