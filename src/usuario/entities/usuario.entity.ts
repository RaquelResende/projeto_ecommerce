import {Entity,PrimaryGeneratedColumn,Column,OneToMany } from "typeorm";
import { Produto } from "src/produtos/entities/produto.entity";

@Entity({name:"tb_usuario"})
export class Usuario {

@PrimaryGeneratedColumn()
id_user:number;
@Column({length:100})
nome:string;
@Column({length:100})
usuario:string;
@Column({length:100 })
email:string;
@Column({length:100})
senha:string;

@OneToMany(() => Produto,(produto) => produto.usuario, { onDelete : "CASCADE"} )
produto:Produto
 

}

