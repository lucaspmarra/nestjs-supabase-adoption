import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {
  name?: string;
  breed?: string;
  age?: number;
  neutered?: boolean;
  forAdoption?: boolean;
  adopted?: boolean;
}
