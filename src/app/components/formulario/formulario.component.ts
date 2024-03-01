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

  comida=""
  food=""

  mostrar(){
    this.name=this.nombre
    if(this.name=="sahoris"){
      console.log("correcto")
    }
    this.lastName=this.apellido
    this.food=this.comida
  }
}
