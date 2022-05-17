import { Get, Controller, Put, Post, Delete, Body, Param } from '@nestjs/common';
//service
import {StudentService} from './student.service';
//DTO
import { StudentDTO } from './dto/student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService : StudentService) {}

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
        const oldStudent = await this.studentService.findStudentById(params.id);
        return await this.studentService.update(oldStudent, updatedStudent)
    }

    @Delete(':id')
    async delete(@Param() params){
        return await this.studentService.delete(params.id)
    }
}
