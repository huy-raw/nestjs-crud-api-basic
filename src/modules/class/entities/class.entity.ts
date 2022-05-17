import { Student } from "src/modules/student/entities/student.entity";
import { Column, Entity, PrimaryColumn, CreateDateColumn, ManyToMany, JoinColumn } from "typeorm";

@Entity('classes')
export class Class {
    @PrimaryColumn({ name: "ClassID", type: "uuid", length: "50" })
    id: string;

    @Column({ name: "ClassName", type: "varchar", length: "255" })
    name: string;

    @CreateDateColumn({ name: "StartedDate" })
    started_at: Date;

    

}