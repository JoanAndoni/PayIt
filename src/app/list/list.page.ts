import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'videocam',
    'outlet',
    'musical-note',
    'card'
  ];
  public deudas = [
    0,
    150,
    78,
    14320
  ];
  public total = 0;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public router: Router) {
    this.deudas.forEach(element => {
      this.total = this.total + element;
    });

    this.items = [
      {
        title: 'Netflix',
        note: this.deudas[0] + ' MXN',
        icon: this.icons[0]
      },
      {
        title: 'CFE',
        note: this.deudas[1] + ' MXN',
        icon: this.icons[1]
      },
      {
        title: 'Spotify',
        note: this.deudas[2] + ' MXN',
        icon: this.icons[2]
      },
      {
        title: 'Tarjeta de crédito',
        note: this.deudas[3] + ' MXN',
        icon: this.icons[3]
      }
    ];
  }

  ngOnInit() {
  }

  move(servicio) {
    this.router.navigateByUrl('servicio');
  }
}
