import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OnClassService } from './on-class.service';
import { CreateOnClassDto } from './dto/create-on-class.dto';
import { UpdateOnClassDto } from './dto/update-on-class.dto';

@Controller('on-class')
export class OnClassController {
  constructor(private readonly onClassService: OnClassService) {}

  @Post()
  create(@Body() createOnClassDto: CreateOnClassDto) {
    return this.onClassService.create(createOnClassDto);
  }

  @Get()
  findAll() {
    return this.onClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.onClassService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOnClassDto: UpdateOnClassDto) {
    return this.onClassService.update(+id, updateOnClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.onClassService.remove(+id);
  }
}
