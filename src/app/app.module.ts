import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { Footer2Component } from './component/footer2/footer2.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Navbar3Component } from './component/navbar3/navbar3.component';
import { AppRoutingModule } from './app-routing.module';
import { CarritoComponent } from './component/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PrincipalComponent,
    Footer2Component,
    NavbarComponent,
    Navbar3Component,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
