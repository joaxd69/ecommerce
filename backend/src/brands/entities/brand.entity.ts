import { Product } from 'src/products/entities/product.entity'
import {Entity, Column,PrimaryGeneratedColumn,OneToMany} from 'typeorm'
@Entity({name:'brands'})///declaramos la entidad y le asignamos un nombre
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  Id:Number

  @Column()
  Name:string

  @OneToMany(()=>Product,product=>product.Brand)/// Una marca puede tener varios productos
  products:[]
  
  @Column({ type: 'text', array: true })///espesificamos que la propiedad sera un tipo array con strings
  ProductsTypes:string[]
} 
