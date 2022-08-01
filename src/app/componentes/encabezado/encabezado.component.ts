import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from "../../service/service.service";
import { Cliente } from "src/app/model/Cliente";

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  nuevoCliente: Cliente[] | undefined;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
      this.service.getCliente()
      .subscribe(data=>{
        this.nuevoCliente=data;
      })
  }

}
