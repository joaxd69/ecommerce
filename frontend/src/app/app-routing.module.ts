import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoriesComponent } from './components/accesories/accesories.component';
import { ApliancesComponent } from './components/apliances/apliances.component';
import { AudioVideoComponent } from './components/audio-video/audio-video.component';
import { CellphoneComponent } from './components/cellphone/cellphone.component';
import { ComputingComponent } from './components/computing/computing.component';
import { GamingComponent } from './components/gaming/gaming.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'cellphones', component:CellphoneComponent },
  {path:'Accesories', component:AccesoriesComponent },
  {path:'Apliances', component:ApliancesComponent },
  {path:'Computing', component:ComputingComponent },
  {path:'Audiovideo', component:AudioVideoComponent },
  {path:'Gaming', component:GamingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
