import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CelularesComponent } from './components/navbar/celularesNav/celularesNav.component';
import { AudioVideoComponent } from './components/navbar/audio-videoNav/audio-videoNav.component';
import { ComputingComponent } from './components/navbar/computingNav/computingNav.component';
import { GamingComponent } from './components/navbar/gamingNav/gamingNav.component';
import { AccessoriesComponent } from './components/navbar/accessoriesNav/accessories.componentNav';
import { ApliancesComponent } from './components/navbar/apliancesNav/apliancesNav.component';
import { AccesoriesComponent } from './components/accesories/accesories.component';
import { CellphoneComponent } from './components/cellphone/cellphone.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllProductsComponent } from './components/all-products/all-products.component';

@NgModule({
  declarations: [///nuestros componentes de la aplicacion
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CelularesComponent,
    AudioVideoComponent,
    ComputingComponent,
    GamingComponent,
    AccessoriesComponent,
    ApliancesComponent,
    AccesoriesComponent,
    CellphoneComponent,
    AdminComponent,
    AllProductsComponent,
  ],
  imports: [///modulos que nos serviran en distintos ambitos
    BrowserModule,
    AppRoutingModule,///para crear rutas
    HttpClientModule///para hacer acciones asincronas como conectar al back end , ver capeta services
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
