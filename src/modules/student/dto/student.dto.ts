import { IsNumber, IsString } from "class-validator";

export class StudentDTO {

    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    dob: number;

    @IsString()
    email: string;

    @IsString()
    status: string;
}