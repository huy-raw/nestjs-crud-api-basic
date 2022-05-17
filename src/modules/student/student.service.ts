/*
https://docs.nestjs.com/providers#services
*/
import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
//Entity
import { Student } from './entities/student.entity';
import { StudentDTO } from './dto/student.dto';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class StudentService {

    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>
    ) { }

    async findAllStudent(): Promise<Student[]> {
        try {
            return await this.studentRepository.find({});
        } catch (err) {
            return err;
        }
    }

    async findStudentById(id: number): Promise<Student> {
        try {
            return await this.studentRepository.findOneById(id)
        } catch (err) {
            return err;
        }
    }

    async insert(student: StudentDTO): Promise<Student> {
        const newStudent = new Student();

        Object.keys(student).forEach((key) => {
            newStudent[key] = student[key];
        });

        try {
            return await this.studentRepository.save(newStudent);
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            return await this.studentRepository.delete(id);
        } catch (err) {
            return err;
        }
    }


    async update(oldStudent: Student, updated_values: StudentDTO): Promise<Student> {
        const updatedStudent = oldStudent;

        Object.keys(updated_values).forEach((key) => {
            updatedStudent[key] = updated_values[key];
        });


        try {
            return await this.studentRepository.save(updatedStudent);
        } catch (err) {
            return err;
        }
    }
}
