import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes : string [] = ['SpiderMan', 'Hulk', 'IronMan', 'Thor', 'Capitan America'];
  
  heroeBorrado : string = '';

  borrarHeroe(): void {
    console.log("borrando");
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
