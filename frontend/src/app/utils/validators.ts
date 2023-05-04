import { Errorvalidators, Products, modelvalidator } from "../interfaces/Interfaces";

export function Validator(inputs:Products){
  let error:Errorvalidators={}
  if(!inputs.Name) error.Name='Selecciona un producto'
  if(!inputs.Brand) error.Brand='Ingrese una marca'
  if(!inputs.Model.Name) error.Model='Ingrese modelo'
  if(!inputs.Price) error.Price='Ingrese un Precio'
  if(!inputs.ProductType) error.ProductType='Seleccione una opcion'
  if(!inputs.Image) error.Image='Ingrese una imagen'
  if(!inputs.Brand || !inputs.Name || !inputs.Model.Name || !inputs.Price || !inputs.Image) error.General='debe completar todos los campos'
  return error
}

