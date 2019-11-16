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
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    PrestamosComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ PrestamosService, FormBuilder, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
