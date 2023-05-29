import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar3Component } from './component/navbar3/navbar3.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarritoComponent } from './component/carrito/carrito.component';



const routes: Routes = [
    {path: "", component: FooterComponent},
    { path: "productos_servicios", component: Navbar3Component },
    { path: "productos_carrito", component: CarritoComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }