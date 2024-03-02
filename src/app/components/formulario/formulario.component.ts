import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PresentationComponent } from '../presentation/presentation.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,PresentationComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nombre=""
  name=""

  apellido=""
  lastName=""

  dog=""
  Ndog=""

  mostrarData=false

  mostrar(){
    this.name=this.nombre
    if(this.name=="yovert"){
      this.name=this.nombre
    }
    this.lastName=this.apellido
    if(this.lastName=="sahoris"){
      this.lastName=this.apellido
    }
    this.Ndog=this.dog
    this.mostrarData=true
  }
}
