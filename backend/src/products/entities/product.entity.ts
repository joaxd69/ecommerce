import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,JoinColumn} from 'typeorm'
import { Brand } from 'src/brands/entities/brand.entity'
@Entity({name:"products"})//declaramos la entidad y le asignamos un nombre a la tabla
export class Product {
    @PrimaryGeneratedColumn('uuid')///para la tabla
    Id:number//para typescript

    @Column()//en caso que no le asignemor el tipo  en el decorador, type orm se lo definira en base al tipo de dato que le pasemos abajo en el nombre de  la propiedad
    Name:string

    @Column('float',{nullable:true})
    Price:number
 
    @Column({nullable:true})
     Type:string

    @Column({ type: 'jsonb',nullable:true })//tipo de dato que sera un objeto
     Characteristic: object;
     
     @Column()
     Image:string

    @ManyToOne(()=>Brand,brand=>brand.Name)///Un producto solo puede tener una sola marca
    @JoinColumn({ name: 'brand_id' })//brand_id sera nombre de la columna de clave foránea en la tabla de productos que se relaciona con la tabla de brands
     Brand:Brand
}
