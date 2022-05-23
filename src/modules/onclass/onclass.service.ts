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

  ) { }

  async create(createOnClassDto: CreateOnClassDto) {
    return await this.onClassRepository.create(createOnClassDto);
  }

  async findAll(): Promise<OnClass[]> {
    try {
      return await this.onClassRepository.find({});
    } catch (err) {
      return err;
    }
  }

  async findOne(classID : string) : Promise<OnClass> {
    try {
      return await this.onClassRepository.findOne({
        where: {
            
        },
        relations: {
          class: true,
        }
      })  
    } catch (err) {
      return err;
    }
  }

  update(id: number, updateOnClassDto: UpdateOnClassDto) {
    return `This action updates a #${id} onClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} onClass`;
  }
}
