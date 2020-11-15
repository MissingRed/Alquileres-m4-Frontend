import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AlquileresService } from "./services/alquileres.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ContenedorComponent } from "./components/contenedor/contenedor.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, ContenedorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AlquileresService],
  bootstrap: [AppComponent],
})
export class AppModule {}
