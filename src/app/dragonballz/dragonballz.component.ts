import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2'
import {DragonballzService} from "./dragonballz.service";
import {Personaje} from "./personaje";

@Component({
  selector: 'app-dragonballz',
  templateUrl: './dragonballz.component.html',
  styleUrls: ['./dragonballz.component.css']
})
export class DragonballzComponent implements OnInit {


  get personajeNuevo() {
    return this.servicedbz.personaje;
  }

  personaje: Personaje = {
    id: 0,
    name: '',
    power: 0
  };


  constructor(private servicedbz: DragonballzService) {

  }

  ngOnInit(): void {
  }

  agregar() {

    if (this.personaje.name.trim().length === 0) {return;}
    //Swal
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Personaje ${this.personaje.name.toUpperCase()} fue guardado`,
      showConfirmButton: false,
      timer: 1500
    })
    //SAVE PERSON
    this.servicedbz.addPerson(this.personaje);
    this.personaje = new Personaje(0, "", 0);

  }

  delete() {
    //Swal
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        //DELETE PERSON
        this.servicedbz.deletePerson();
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }


  editarPersonaje() {

  }
}
