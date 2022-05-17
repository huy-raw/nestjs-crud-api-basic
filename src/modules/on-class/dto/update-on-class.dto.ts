import { PartialType } from '@nestjs/mapped-types';
import { CreateOnClassDto } from './create-on-class.dto';

export class UpdateOnClassDto extends PartialType(CreateOnClassDto) {}
