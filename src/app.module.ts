import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { DatabaseModule } from './database/database.module';
import { ProdutosModule } from './produtos/produtos.module';
import { UsuariosModule } from './usuario/usuario.module';

@Module({
  imports: [CategoriasModule, DatabaseModule, ProdutosModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
