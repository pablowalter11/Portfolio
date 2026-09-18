import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {

  description: string = '';

  showDescription(option: number) {
    switch(option) {
      case 1:
        this.description = 'Soy estudiante de Programación en la Universidad Tecnológica Nacional de Mar del Plata. Me interesa el desarrollo de aplicaciones web y disfruto aprender nuevas tecnologías mientras desarrollo proyectos propios.';
        break;
      case 2:
        this.description = 'Actualmente estoy enfocado en el desarrollo web, trabajando tanto en frontend como en backend. Me interesa especialmente la parte backend y la creación de APIs y aplicaciones.';
        break;
      case 3:
        this.description = 'Tengo conocimientos en Java, Spring Boot, Angular, MySQL, Git y GitHub, y continúo aprendiendo nuevas herramientas y tecnologías.';
        break;
      case 4:
        this.description = 'Continúo desarrollando proyectos para mejorar mis conocimientos y adquirir experiencia en el desarrollo de aplicaciones web.';
        break;
      default:
        console.log('Cómo hiciste para que apareciera este mensaje jaja.')
        break;
    }
  }
}

