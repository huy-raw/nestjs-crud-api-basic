import { Class } from "src/modules/class/entities/class.entity";
import { Student } from "src/modules/student/entities/student.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('on-class')
export class OnClass {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({name:'date-join'})
    join_at: Date;
    
    @ManyToOne(
        ()=> Student,
        (student) => student.onClass
    )
    @JoinColumn({
        name:'studentID'
    })
    student?: Student;

    @ManyToOne(
        ()=> Class,
        (classes) => classes.onClass
    )
    @JoinColumn({
        name:'classID'
    })
    class?: Student;
}
