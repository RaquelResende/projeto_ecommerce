import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, ParseIntPipe } from '@nestjs/common';
import { UsuariosService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuariosService: UsuariosService) {}
  
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Usuario[]>{
    return this.usuariosService.findAll()
  }

  @Get(':id_user')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id_user', ParseIntPipe) id_user: number): Promise<Usuario> {
    return this.usuariosService.findById(id_user);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  async findByName(@Param('nome') nome: string): Promise<Usuario[]> {
    return this.usuariosService.findByName(nome);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }
  
  @Patch('/atualizar/:id_user')
  @HttpCode(HttpStatus.OK)
  update(@Param('id_user') id_user: number, @Body()updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(id_user,updateUsuarioDto);
  }
  
  
  @Delete('/:id_user')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id_user', ParseIntPipe) id_user: number) {
    return this.usuariosService.delete(id_user);
  }
}
