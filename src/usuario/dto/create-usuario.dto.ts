
import { IsNumber, IsString,} from "class-validator";

export class CreateUsuarioDto {

    @IsNumber()
    id_user:number;
    @IsString()
    nome:string;
    @IsNumber()
    usuario:string;
    @IsNumber()
    email:string;
    @IsString()
    senha:string;
    @IsString()
    foto:string;
    


}
