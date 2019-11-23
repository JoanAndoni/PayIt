import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.page.html',
  styleUrls: ['./servicio.page.scss'],
})
export class ServicioPage implements OnInit {

  metodoEscogido: string;
  concepto = 450;
  metodos = [
    { nombre: 'Tarjeta de débito' },
    { nombre: 'Paypal' },
    { nombre: 'Bitcoins' }
  ];

  constructor() {
    
  }

  ngOnInit() {
  }

}
