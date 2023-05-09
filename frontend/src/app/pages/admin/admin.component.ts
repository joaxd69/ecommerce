import { Component } from '@angular/core';
import { Products,Model, ProductType, Errorvalidators, ProductCharacteristic } from 'src/app/interfaces/Interfaces';
import { ProductsService } from 'src/app/services/products/products.service'; ///uestro servicio que nos conectara con el back end
import { Validator } from 'src/app/utils/validators';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
     
  constructor(private productservice:ProductsService){

  }
  
     
    newOption:boolean=false///para agregar una nueva opcion que no viene en el back la idea es que se envie y se guarde de paso
    sections:ProductType[]=[ProductType.Accesories,ProductType.Apliances,ProductType.Audiovideo,
              ProductType.Cellphones,ProductType.Gaming,ProductType.Informatics]//las secciones disponibles , para que el usuario elija donde guardara el nuevo producto

    Model:Model={///definimos el modelo del producto
      Name:'',
      Stock:{
        avaliable:true,
        stockNumber:0
      }
    }

    ProductCharacteristic:ProductCharacteristic={//aqui agregaremos las distintas descripciones del producto
     Description:''
     
    }
    
    newProduct:Products={/// con esto crearemos el nuevo producto
      Name:'',
      Model:this.Model,/// el objeto model sera insertado aqui
      Image:'',
      Price:0,
      Characteristic:this.ProductCharacteristic,//las descripciones sera insertadas aqui
      Brand:'',
      ProductType:undefined//undefined porque luego se le asignara algun valor de su enum correspondiente
    }

    visibleErrors:boolean=false//si esto esta en true lo usaremos para ver los errores
    Error:Errorvalidators={}///aqui guardaremos los errores
    
    ngOnInit(){
      this.Error.General='Completa los campos necesarios'//al iniciar el componente se pondra un error por defecto para que no se envien datos vacios
    }
    updateModel<k extends keyof Model>(actualInput:k,value:Model[k]){//recibiremos el nombre del input que representara una propiedad del objeto model, value sera el valor que pasemos en el input
      this.Model[actualInput]=value//recibiremos el valor del input y se lo ponemos en la propiedad del modelo que represente actualinput
    }
    updateObject<k extends keyof Products> (actualinput:k,value:Products[k]){///K representa un tipado que se refiere a que sera key de un objeto en este caso de Products
       this.newProduct[actualinput]=value//lo mismo que la funcion updatemodel pero afecatara a newproduct
    }
    updateProductCharacteristic<k extends keyof ProductCharacteristic>(actualInput:k,value:ProductCharacteristic[k]){
      
    this.ProductCharacteristic[actualInput]=value
    }
    updateStock(event: Event){//recibe un evento (del html)
      const valorInput = (event.target as HTMLInputElement).value;//guardamos el valor del input
      const actualInput=(event.target as HTMLInputElement).name;//guardamos el name del input

      actualInput==='StockNumber'?this.Model.Stock.stockNumber=parseInt(valorInput)://si el name es 'stocknumber' actualizamos el stock del modelo,
      valorInput==='true'?this.Model.Stock.avaliable=true://si no hacemos otra condicion, y si el valor del input es true , seteamos en true la disponibilidad
      this.Model.Stock.avaliable=false// si no en false
      console.log(this.Model)
    }

    onChange(event: Event,propiedad?:string) {//el model sera un booleano que se lo pasaremos al momento de pasarle la funcion al elemento, en base a eso hara distintas acciones
      const valorInput = (event.target as HTMLInputElement).value;//nos quedamos con el value del input
      const actualInput=(event.target as HTMLInputElement).name;//nos quedamos con el name del input
      propiedad==='Reset'&&this.resetCharacteristic()
      propiedad==='Model'?this.updateModel(actualInput as keyof Model,valorInput):
      propiedad=='Characteristic'?this.updateProductCharacteristic(actualInput as keyof ProductCharacteristic,valorInput)://si recbimos el model en true es xq queremos modificar el objeto modelo
      this.updateObject(actualInput as keyof Products,valorInput)///si recibimos false como model, usaremos la funcion que definimos arriba para actualizar el nuevo producto que los valores del input y actualinput indicara cual propiedad debe editarse
      this.Error=Validator(this.newProduct)//tambien definimos los errores.
      console.log(this.newProduct);
      
   
    }
    resetCharacteristic(){
    this.ProductCharacteristic={Description:''};
    this.newProduct.Characteristic=this.ProductCharacteristic
    }
    setNewOption(){
     this.newOption=!this.newOption
    }///esto se lo asignamos a un boton que sera el que permita que el usuario agregar una nueva opcion

    resetfields(){//esto se loa signamos al boton que reseteara los campos por si el usuario quiere volver a rellenar los campos
      let modelreset={
        Name:'',
        Stock:{
          avaliable:true,
          stockNumber:0
        }
      }

      let reset:Products={
        Name:'',
        Model:modelreset,
        Image:'',
        Price:0,
        Characteristic:{
          Description:'',
        },
        Brand:'',
        ProductType:undefined//undefined porque luego se le asignara algun valor de su enum correspondiente
      }
      this.newProduct=reset
      this.Model=modelreset
  
    }
    
//////////////////las que interactuan con el back
    

    createProduct(){ //aqui creamos el nuevo producto, dependiendo si hay errores o no
      this.visibleErrors=true//si hay errores los queremos ver
      if(this.Error.General){//si el error es el que definimos arriba inicialmente, devolvemos ese error
        return alert(this.Error.General)
      }
      if(Object.entries(this.Error).length)//convertimos el objeto en array y si tiene longitude es xq hay algun error asi qeu advertimos al usuario
        return alert('Revisa los Errores')
      
      this.productservice.createProducts(this.newProduct).subscribe({
        next:res=>{
        alert('Producto creado!')//si sale bien lanzamos un 
        setTimeout(() => {
          location.reload()///recargamos la pagina una vez creado el producto
        }, 500);
      },
      error:error=>{
        alert('Ups algo salio mal!')
       }
      })
     
    }
}
