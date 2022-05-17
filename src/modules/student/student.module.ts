/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentService } from './student.service';



@Module({
    imports: [TypeOrmModule.forFeature([Student])],
    exports: [TypeOrmModule],
    providers: [StudentService] 
})
export class StudentModule { }
