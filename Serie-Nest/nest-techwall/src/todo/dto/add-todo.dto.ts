import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, Length, MinLength } from "class-validator";

export class AddTodoDTO {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    // @Length(3, 20)
    @IsNotEmpty()
    @IsOptional()
    @MinLength(3, {
        message: "Name is too short"
    })
    // @IsIn(["low", "medium", "high"])
    name: string;
}