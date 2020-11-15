import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Alquiler } from "../models/Alquiler";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AlquileresService {
  API_URI = "http://localhost:3000/api";
  constructor(private http: HttpClient) {}

  getAlquileres() {
    return this.http.get(`${this.API_URI}/alquileres`);
  }

  getAlquiler(id: string) {
    return this.http.get(`${this.API_URI}/alquileres/${id}`);
  }

  deleteAlquiler(id: string) {
    return this.http.delete(`${this.API_URI}/alquileres/${id}`);
  }

  saveAlquiler(alquiler: Alquiler) {
    return this.http.post(`${this.API_URI}/alquileres`, alquiler);
  }

  updateAlquiler(
    id: string | number,
    updatedAlquiler: Alquiler
  ): Observable<Alquiler> {
    return this.http.put(`${this.API_URI}/alquileres/${id}`, updatedAlquiler);
  }
}
