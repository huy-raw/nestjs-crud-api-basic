
import { StudentModule } from './modules/student/student.module';
import { StudentService } from './modules/student/student.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Student } from './modules/student/entities/student.entity';
import { Class } from './modules/class/entities/class.entity';
import { OnClassModule } from './modules/onclass/onclass.module';
import { OnClass } from './modules/onclass/entities/onclass.entity';
import { ClassModule } from './modules/class/class.module';
//Environment


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
        host: "localhost",
        port: 3306,
        username: 'root',
        password: '0963518859w',
        database: 'studentmanagement',
        entities: [Student, Class, OnClass],
        synchronize: true
    }),
    StudentModule,
    ClassModule,
    OnClassModule
  ],
  controllers: [AppController],
  providers: [
    StudentService, AppService],
})
export class AppModule { }
