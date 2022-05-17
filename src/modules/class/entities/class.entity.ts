import { OnClass } from "src/modules/on-class/entities/on-class.entity";
import { Column, Entity, PrimaryColumn, CreateDateColumn, OneToMany } from "typeorm";

@Entity('classes')
export class Class {
    @PrimaryColumn({ name: "ClassID", type: "uuid", length: "50" })
    id: string;

    @Column({ name: "ClassName", type: "varchar", length: "255" })
    name: string;

    @CreateDateColumn({ name: "StartedDate" })
    started_at: Date;

    @OneToMany(
        ()=> OnClass,
        (onClass) => onClass.class
    )
    onClass?: OnClass[];
}