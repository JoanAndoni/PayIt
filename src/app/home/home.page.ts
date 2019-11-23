import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public deudaTotal = 16780;

  constructor(public router: Router) {}

  getServices() {
    this.router.navigateByUrl('list');
  }

  metodo() {
    this.router.navigateByUrl('metodo');
  }

}
