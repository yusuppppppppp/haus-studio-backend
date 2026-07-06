import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateEmailDto {
    @IsNotEmpty()
    name!: string;

    @IsEmail()
    email!: string;

    @IsNotEmpty()
    message!: string;
}