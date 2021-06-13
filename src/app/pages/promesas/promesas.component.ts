import { Component, OnInit } from '@angular/core';
//import { resolve } from 'node:path';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css'],
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsuarios().then(usuarios=>{console.log(usuarios)});
    const promesa=new Promise((resolve, reject)=>{
      if (false) {
        resolve('Hola mundo');
      } else {
        reject('algo Salio mal');
      }
      
    });
    promesa.then((mensaje)=>{
      console.log(mensaje);
    })
    .catch(error=>console.log('Error en mi promesa ',error));
    console.log("Fin de Init");
  }

  getUsuarios() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users?page=2')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }
}
