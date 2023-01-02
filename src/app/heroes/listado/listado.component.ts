import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string ='';
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';  // si es undefined devuelve un string vacío
  }
}
