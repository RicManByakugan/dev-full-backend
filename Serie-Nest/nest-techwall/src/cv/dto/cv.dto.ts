import { IsNotEmpty, Min, Max, IsNumber, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class AddCvDTO{
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    firstname: string; 

    @IsNotEmpty()
    @Type(() => Number)
    @Min(18)
    @Max(45)
    @IsNumber()
    age: number;    
    
    @IsNotEmpty()
    cin: number;    
    
    @IsNotEmpty()
    job: string;    
    
    @IsNotEmpty()
    @IsOptional()
    path: string;
}