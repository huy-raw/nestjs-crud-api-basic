import { IsDate, IsNumber } from "class-validator";

export class OnClassDTO{
    @IsNumber()
    id : number;

    @IsDate()
    join_at: Date;
}