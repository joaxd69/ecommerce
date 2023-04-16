import { Product } from 'src/products/entities/product.entity'
import {Entity, Column,PrimaryGeneratedColumn,OneToMany} from 'typeorm'
@Entity({name:'brands'})///declaramos la entidad y le asignamos un nombre
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  Id:Number

  @Column('varchar',{nullable:false})
  Name:string

  @Column({ type: 'text', array: true,nullable:true })///espesificamos que la propiedad sera un tipo array con strings
  ProductsTypes:string[]
  
  @OneToMany(()=>Product,product=>product.Brand)/// Una marca puede tener varios productos
  products:Product[]
} 
