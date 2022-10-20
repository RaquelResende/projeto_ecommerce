import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { DatabaseModule } from './database/database.module';
import { ProdutosModule } from './produtos/produtos.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [CategoriasModule, DatabaseModule, ProdutosModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
