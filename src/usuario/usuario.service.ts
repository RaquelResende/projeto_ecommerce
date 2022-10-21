import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {

  constructor(
    @Inject('USUARIOS_REPOSITORY')
    private usuariosRepository: Repository<Usuario[]>
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuariosRepository.find();
  }

  async findById(id_user: number): Promise<Usuario> {

    let usuario = await this.usuariosRepository.findOne({

      where: {
        id_user
      }

    });

    if(!usuario) {

      throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);
  
    }

   // usuario = Usuario[];

    return usuario; 
  }
  
  async findByName(nome: string): Promise<Usuario[]> {

    return await this.usuariosRepository.find({

      where:{

        nome: ILike(`%${nome}%`)

      }
    });
    
  }
  
  async create(createUsuarioDto: CreateUsuarioDto): Promise<CreateUsuarioDto> {
    return this.usuariosRepository.save(createUsuarioDto);
  }

  async update(id_user: number,  updateUsuarioDto: UpdateUsuarioDto): Promise<UpdateUsuarioDto> {

    
    return this.usuariosRepository.update(id_user, updateUsuarioDto);
  }

  async delete(id_user: number): Promise<DeleteResult> {

    let buscaUsuario = await this.findById(id_user
      );

    if (!buscaUsuario) {
        throw new HttpException('Usuario não encontrada!', HttpStatus.NOT_FOUND)
    }
    return await this.usuariosRepository.delete(id_user);
  }
}