import { IsNotEmpty, Min, Max, IsNumber, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class UpdateCvDTO {
    @IsString()
    @IsOptional()
    name: string;
    
    @IsString()
    @IsOptional()
    firstname: string;

    @Type(() => Number)
    @Min(18)
    @Max(45)
    @IsNumber()
    @IsOptional()
    age: number;

    @IsOptional()
    cin: number;

    @IsOptional()
    job: string;

    @IsOptional()
    path: string;
}