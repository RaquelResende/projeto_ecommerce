import {Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity(({name:"tb_categorias"}))
export class Categoria {
    @PrimaryGeneratedColumn()
    id_ct2:number;
    @Column({length:100})
    decoracao:string;
    @Column({length:100})
    moveis:string;




}
