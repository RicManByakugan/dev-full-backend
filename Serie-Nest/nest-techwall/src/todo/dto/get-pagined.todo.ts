import { Type } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class GetPaginedTodoDTO {
    @IsNumber()
    @IsOptional()
    @Type(() => Number) // LIKE PARSEINT - TypeTransformer
    page: number;
    
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    item: any;
}