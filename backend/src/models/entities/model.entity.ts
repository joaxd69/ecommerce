import { Product } from 'src/products/entities/product.entity';
import {Entity, Column,PrimaryGeneratedColumn,OneToMany, PrimaryColumn,ManyToOne, JoinColumn} from 'typeorm'

@Entity({name:'Models'})
export class Model {
  @PrimaryGeneratedColumn()
  Id:number
  @Column('varchar')
  Name:string;
  @Column('simple-json')
  Stock:object;

  @ManyToOne(()=>Product,product=>product.Name)
  @JoinColumn({name:'models-products'})
  Product:Product
}


