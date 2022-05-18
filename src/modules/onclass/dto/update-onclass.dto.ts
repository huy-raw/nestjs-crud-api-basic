import { PartialType } from '@nestjs/mapped-types';
import { CreateOnClassDto } from './create-onclass.dto';

export class UpdateOnClassDto extends PartialType(CreateOnClassDto) {}
