import { Get, Controller, Put, Post, Delete, Body, Param, Request, Query } from '@nestjs/common';
//service
import {StudentService} from './student.service';
//DTO
import { StudentDTO } from './dto/student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService : StudentService) {}

    @Get('class/:classID')
    async class(@Param() params): Promise<StudentDTO | any> {
        console.log(params);
        return await this.studentService.findStudentByClass(params.classID);
    }

    @Get('class1')
    async class1(@Query() query): Promise<StudentDTO | any> {
        console.log(query);
        return await this.studentService.findStudentByClass(query.classID);
    }

    @Get()
    async findAll(): Promise<StudentDTO[]> {
        return await this.studentService.findAllStudent();
    }

    @Get(':id')
    async findStudentById(@Param() params): Promise<StudentDTO> {
        return await this.studentService.findStudentById(params.id);
    }

    @Post()
    async create(@Body() student: StudentDTO): Promise<StudentDTO> {
        return await this.studentService.insert(student) as StudentDTO;
    }

    @Put(':id')
    async update(@Body() updatedStudent: StudentDTO, @Param() params): Promise<StudentDTO> {
        console.log(params);
        const oldStudent = await this.studentService.findStudentById(params.id);
        return await this.studentService.update(oldStudent, updatedStudent)
    }

    @Delete(':id')
    async delete(@Param() params){
        return await this.studentService.delete(params.id)
    }

  
}
