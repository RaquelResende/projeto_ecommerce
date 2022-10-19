import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { categoriasProviders } from './entities/categorias.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriasController],
  providers: [
    ...categoriasProviders,
    CategoriasService,]
})
export class CategoriasModule {}
