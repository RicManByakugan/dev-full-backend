import { IsEmail, IsString } from "class-validator";

export class UserSubscribeDto {
    @IsString()
    username: string;
    
    @IsString()
    @IsEmail()
    email: string;
    
    @IsString()
    password: string;
}