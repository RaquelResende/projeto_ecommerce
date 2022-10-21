import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsString, IsNumber } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {

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
