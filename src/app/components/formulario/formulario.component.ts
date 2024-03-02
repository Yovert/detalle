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
    if(this.nombre.toLowerCase()=="yovert"){
      this.name=" Att: " + this.nombre + " 🫰"
    }else{
      this.name=""
    }
    this.lastName=this.apellido
    if(this.apellido.toLowerCase()=="sahoris"){
      this.lastName="Con mucho amor para " + this.apellido
    }else{
      this.lastName="Nombre Incorrecto"
    }
    this.Ndog=this.dog
    this.mostrarData=true
  }
}
