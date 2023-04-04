import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
