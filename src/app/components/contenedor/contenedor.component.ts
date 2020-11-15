import { Component, OnInit } from "@angular/core";
import { AlquileresService } from "../../services/alquileres.service";
import { Alquiler } from "src/app/models/Alquiler";

@Component({
  selector: "app-contenedor",
  templateUrl: "./contenedor.component.html",
  styleUrls: ["./contenedor.component.css"],
})
export class ContenedorComponent implements OnInit {
  alquileres: any = [];
  alquiler: Alquiler = {
    id: 0,
    direccion: "",
    hora_in: "",
    hora_fin: "",
    num_hrs: null,
    saldo: null,
    num_lav_fk: null,
  };
  constructor(private alquileresService: AlquileresService) {}

  ngOnInit(): void {
    this.getAlquileres();
  }

  guardarAlquiler() {
    delete this.alquiler.id;

    this.alquileresService.saveAlquiler(this.alquiler).subscribe(
      (res) => {
        console.log(res);
        // this.router.navigate(["/games"]);
        this.getAlquileres();
        alert("Alquiler guardado");
      },
      (err) => console.error(err)
    );
  }

  getAlquileres() {
    this.alquileresService.getAlquileres().subscribe(
      (res) => {
        this.alquileres = res;
      },
      (err) => console.log(err)
    );
  }

  deleteAlquiler(id: string) {
    this.alquileresService.deleteAlquiler(id).subscribe(
      (res) => {
        console.log(res);
        this.getAlquileres();
        alert("Alquiler Eliminado");
      },
      (err) => console.log(err)
    );
  }

  updateAlquiler(id: string) {
    this.alquileresService.updateAlquiler(id, this.alquiler).subscribe(
      (res) => {
        console.log(res);
        this.getAlquileres();
      },
      (err) => console.log(err)
    );
  }
}
