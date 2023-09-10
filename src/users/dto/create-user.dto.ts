import {
  IsNotEmpty,
  IsString,
  IsNumber,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  role: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsNumber()
  @IsOptional()
  salary: number;
}
