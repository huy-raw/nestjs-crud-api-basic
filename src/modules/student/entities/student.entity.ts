
import { Class } from 'src/modules/class/entities/class.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum ActiveTypes {
  ON_GOING = "on_going",
  SUSPEND = "suspend",
}

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  name: string;

  @Column({ name: "DOB" })
  dob: number;

  @Column({ type: 'varchar', length: 256, nullable: false, unique: true })
  email: string;

  @Column({ name: "Active", type: 'enum', enum: ActiveTypes })
  status: string;

  @OneToMany()
  

}
