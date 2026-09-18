import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  gmail: string = '';
  celular: string = '';

  showGamil() {
    this.gmail = 'pablo.walter.quiroga11@gmail.com'
  }

  showCelular() {
    this.celular = '2234490562';
  }
}
