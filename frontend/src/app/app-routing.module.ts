import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ComputingproductsComponent } from './pages/computingproducts/computingproducts.component';
import { AudioVideoProductsComponent } from './pages/audio-video-products/audio-video-products.component';
import { CellphoneProductsComponent } from './pages/cellphone-products/cellphone-products.component';
import { AccesoriesProductsComponent } from './pages/accesories-products/accesories-products.component';
import { GamingProductsComponent } from './pages/gaming-products/gaming-products.component';
import { ApliancesProductsComponent } from './pages/apliances-products/apliances-products.component';

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'cellphones', component:CellphoneProductsComponent },
  {path:'Accesories', component:AccesoriesProductsComponent },
  {path:'Computing', component:ComputingproductsComponent},
  {path:'Audiovideo', component:AudioVideoProductsComponent },
  {path:'Gaming', component:GamingProductsComponent},
  {path:'Admin', component:AdminComponent},
  {path:'Apliances', component:ApliancesProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
