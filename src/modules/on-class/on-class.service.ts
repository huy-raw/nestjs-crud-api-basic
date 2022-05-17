import { Injectable } from '@nestjs/common';
import { CreateOnClassDto } from './dto/create-on-class.dto';
import { UpdateOnClassDto } from './dto/update-on-class.dto';

@Injectable()
export class OnClassService {
  create(createOnClassDto: CreateOnClassDto) {
    return 'This action adds a new onClass';
  }

  findAll() {
    return `This action returns all onClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} onClass`;
  }

  update(id: number, updateOnClassDto: UpdateOnClassDto) {
    return `This action updates a #${id} onClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} onClass`;
  }
}
