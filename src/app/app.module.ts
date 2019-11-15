import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { AboutComponent } from './components/public/about/about.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PrestamosService } from './services/prestamos.service';
import { PrestamosComponent } from './components/privado/prestamos/prestamos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    PrestamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ PrestamosService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
