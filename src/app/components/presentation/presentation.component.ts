import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

  @Input() mostrar=false

  @Input() nombre:string=""
  @Input() apellido:string=""
  @Input() perro:string=""

  mensaje2=false
  Song=false

  mostrarMen(){
    this.mensaje2=true
  }
  mostrarSong(){
    this.Song=true
  }

}
