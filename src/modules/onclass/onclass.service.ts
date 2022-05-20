import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOnClassDto } from './dto/create-onclass.dto';
import { UpdateOnClassDto } from './dto/update-onclass.dto';
import { OnClass } from './entities/onclass.entity';

@Injectable()
export class OnClassService {

  constructor(
    @InjectRepository(OnClass)
    private readonly onClassRepository: Repository<OnClass>

  ){}

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
