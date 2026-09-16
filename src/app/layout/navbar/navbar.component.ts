import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  r = inject(Router)

  cambiar() {
    const proximaRuta = this.r.url === '/' ? '/contacto' : '';
    this.r.navigateByUrl(proximaRuta)
  }
}
