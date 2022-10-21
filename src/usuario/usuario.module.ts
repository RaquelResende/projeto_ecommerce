import { Module } from '@nestjs/common';
import { UsuariosService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usuariosProviders } from './usuario.providers';

@Module({
  imports: [ DatabaseModule],
  controllers: [UsuarioController],
  providers: [
    ...usuariosProviders,
     UsuariosService]
})
export class UsuariosModule {}
