import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CelularesComponent } from './components/navbar/celularesNav/celularesNav.component';
import { AudioVideoComponent } from './components/navbar/audio-videoNav/audio-videoNav.component';
import { ComputingComponent } from './components/navbar/computingNav/computingNav.component';
import { GamingComponent } from './components/navbar/gamingNav/gamingNav.component';
import { AccessoriesComponent } from './components/navbar/accessoriesNav/accessories.componentNav';
import { ApliancesComponent } from './components/navbar/apliancesNav/apliancesNav.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SectionsTitlesComponent } from './components/sections-titles/sections-titles.component';
import { ComputingproductsComponent } from './pages/computingproducts/computingproducts.component';
import { AudioVideoProductsComponent } from './pages/audio-video-products/audio-video-products.component';
import { CellphoneProductsComponent } from './pages/cellphone-products/cellphone-products.component';
import { AccesoriesProductsComponent } from './pages/accesories-products/accesories-products.component';
import { GamingProductsComponent } from './pages/gaming-products/gaming-products.component';
import { ApliancesProductsComponent } from './pages/apliances-products/apliances-products.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductsCardsComponent } from './components/products-cards/products-cards.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { MenuresponsiveComponent } from './components/menuresponsive/menuresponsive.component';

import * as dotenv from 'dotenv';


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
    CellphoneProductsComponent,
    AdminComponent,
    AllProductsComponent,
    SectionsTitlesComponent,
    AudioVideoProductsComponent,
    ComputingproductsComponent,
    AudioVideoProductsComponent,
    CellphoneProductsComponent,
    AccesoriesProductsComponent,
    GamingProductsComponent,
    ApliancesProductsComponent,
    FiltersComponent,
    ProductsCardsComponent,
    MenuresponsiveComponent,
  ],
  imports: [///modulos que nos serviran en distintos ambitos
  BrowserModule,
  AppRoutingModule,///para crear rutas
  HttpClientModule,///para hacer acciones asincronas como conectar al back end , ver capeta services
  FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
