import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',  ////
        database: 'ecommerce',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: false, 
      });

      return dataSource.initialize();
    },
  },
];