import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassDTO } from './dto/class.dto';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';

@Injectable()
export class ClassService {

  constructor(
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>

  ) { }

  create(createClassDto: CreateClassDto) {
    return 'This action adds a new class';
  }

  async findAllClass(): Promise<any> {
    try {
      return await this.classRepository.find({});
    } catch (error) {
      return error
    }
    
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
