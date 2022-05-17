import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('on-class')
export class OnClass {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({name:'date-join'})
    join_at: Date;
    
}
