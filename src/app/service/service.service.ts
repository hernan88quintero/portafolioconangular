import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  //HACE REFRENCIA AL PATH DEL PROYECTO BAKC-END
  Url= 'http://localhost:8080/cliente/traer';

  //Métodos a utilizar para traer los datos de la

  getCliente(){
     //Este OBJETO de tipo Cliente viene de la carpeta MODELO
    return this.http.get<Cliente[]>(this.Url);
  }

}
