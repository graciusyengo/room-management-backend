import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
@IsEmail({}, { message: 'Le champ email doit contenir une adresse email valide' })
    email:string
    @IsString()
    password:string
   
    @IsNotEmpty({message:"le champs username est obligatoire"})
    @IsString()
    username:string
    
}
