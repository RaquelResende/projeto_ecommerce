import { DataSource } from 'typeorm';
import { Categoria } from './categoria.entity';

export const categoriasProviders = [
  {
    provide: 'CATEGORIAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Categoria),
    inject: ['DATA_SOURCE'],
  },
];