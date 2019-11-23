import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  private servicios = [
    {
      img: '../../assets/entretenimiento.jpg',
      name: 'Entretenimiento',
      mesesPagados: 4,
      promedio: 564,
      servicios: ['Netflix', 'Spotify', 'Dish']
    },
    {
      img: '../../assets/casa.jpg',
      name: 'Hogar',
      mesesPagados: 10,
      promedio: 1243,
      servicios: ['CFE', 'Agua', 'Telmex']
    },
    {
      img: '../../assets/otros.jpg',
      name: 'Otros',
      mesesPagados: 9,
      promedio: 93320,
      servicios: ['Colegiatura Antonio', 'Tarjeta de Crédito']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
