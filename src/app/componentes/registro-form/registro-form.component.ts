import { Component, OnInit } from '@angular/core';

//Importación de las librerías que el formulario necesita.
//Importación de la clase "Validators" quién nos validará los campos.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {
  formulario: FormGroup;
  // Inyectar en el constructor el formBuilder
constructor(private formBuilder: FormBuilder) {
  // controles para el formulario
  this.formulario= this.formBuilder.group({
  nombre:['', [Validators.required, Validators.minLength(2)]],
  apellido:['', [Validators.required, Validators.minLength(3)]],
  fecha:['', Validators.required],
  correo:['', [Validators.required, Validators.email]],
  clave:['', [Validators.required, Validators.minLength(4)]],
  terminos:['' , [Validators.required, Validators.requiredTrue]],
  
  })
 }

ngOnInit(){}

// Getters y Setters de Nombre
get ObtenerNombre(){
  return this.formulario.get("nombre");
 }

// Getters y Setters de Apellido
get ObtenerApellido(){
  return this.formulario.get("apellido");
 }

// Getters y Setters de Fecha
get ObtenerFecha(){
  return this.formulario.get("fecha");
}

// Getters y Setters de Correo
get ObtenerCorreo(){
 return this.formulario.get("correo");
}

get ObtenerCorreoValido() {
  return false
}

// Getters y Setters de Clave
get ObtenerClave(){
  return this.formulario.get("clave");
}

get ValidezClave(){
  return this.ObtenerClave?.touched && !this.ObtenerClave?.valid;
}

// Getters y Setters de terminos

get ObtenerTerminos(){
  return this.formulario.get("terminos");
 }


funcionOnEnviar(event: Event){
  // Detenemos la propagación o ejecución del compotamiento submit de un form
  event.preventDefault; 

  if (this.formulario.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Todo salio bien ¡Enviar formuario!")
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.formulario.markAllAsTouched(); 
  }

}

}
