import { IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsString()
  breed: string;

  @IsInt()
  age: number;

  @IsBoolean()
  neutered: boolean;

  @IsBoolean()
  forAdoption: boolean;

  @IsBoolean()
  adopted: boolean;
}
