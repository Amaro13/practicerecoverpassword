import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @Length(3, 30)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "User's name",
    example: 'John Smith',
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: "User's photograph",
    example: 'https://user-photo.com',
  })
  image: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'You need a stronger password.',
  })
  @ApiProperty({
    description:
      "User's password should contain at least capital letters, small letters, a number and or a special character.",
    example: '0Wn3r12#$',
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Confirm password',
    example: '0Wn3r12#$',
  })
  confirmPassword: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: "User's email address",
    example: 'owner@virtumed.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: "User's CRM",
    example: '4567879876',
  })
  crm?: string;

  @IsString()
  @ApiProperty({
    description: "User's residency",
    example: 'Cardiologista',
  })
  residency?: string;

  @IsString()
  @Length(2, 2)
  @ApiProperty({
    description: "User's estado",
    example: 'RJ',
  })
  uf?: string;

  @IsEnum(['Admin', 'Pacient', 'Doctor'])
  @IsIn(['Admin', 'Pacient', 'Doctor'])
  @ApiProperty({
    description: 'Grants user access to routes based on roles',
    example: 'Admin',
  })
  role: UserRole;
}
