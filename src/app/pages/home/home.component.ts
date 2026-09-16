import { Component } from '@angular/core';
import { SobreMiComponent } from '../../components/sobre-mi/sobre-mi.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProyectosComponent } from '../../components/proyectos/proyectos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProyectosComponent, SobreMiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
