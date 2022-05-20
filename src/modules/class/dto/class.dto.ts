import { IsDate, IsString } from 'class-validator'

export class ClassDTO {
    @IsString()
    id: string;
    
    @IsString()
    name: string;
    
    @IsDate()
    startDate: Date;
}