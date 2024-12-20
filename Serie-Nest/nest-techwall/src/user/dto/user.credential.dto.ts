import { IsString, IsNotEmpty } from 'class-validator';

export class UserCredentialDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}