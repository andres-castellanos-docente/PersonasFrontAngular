import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PersonasModel} from '../../../models/personas.model';
import {PersonasService} from '../../../services/personas.service';

@Component({
  selector: 'app-diagpersonas',
  templateUrl: './diagpersonas.component.html',
  styleUrls: ['./diagpersonas.component.scss']
})
export class DiagpersonasComponent implements OnInit {
  PersonasForm: FormGroup;
  PersonasSubmited: boolean;
  selectedPersonas: PersonasModel;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private builder: FormBuilder,
              private personasService: PersonasService) {
    if (data.dataed === null) {
      this.selectedPersonas = new PersonasModel(null);
    } else {
      this.selectedPersonas = new PersonasModel(data.dataed);
    }
  }


  ngOnInit(): void {
    this.PersonasForm = this.builder.group({
      id: [this.selectedPersonas.id, []],
      primernombre: [this.selectedPersonas.primernombre, [Validators.required, Validators.maxLength(80)]],
      segundnombre: [this.selectedPersonas.segundnombre, [Validators.maxLength(80)]],
      primerapellido: [this.selectedPersonas.primerapellido, [Validators.required, Validators.maxLength(80)]],
      segundoapellido: [this.selectedPersonas.segundoapellido, [Validators.maxLength(80)]],
      celular: [this.selectedPersonas.celular, [Validators.required, Validators.maxLength(10)]],
      email: [this.selectedPersonas.email, [Validators.required, Validators.email, Validators.maxLength(100)]],

    });
  }

  crear(): void {
    this.PersonasSubmited = true;

    const PersonasModelEnv = new PersonasModel(this.PersonasForm.value);
    if (this.data.dataed === null) {
      this.personasService.crearPersona(PersonasModelEnv).subscribe((res: Response) => {
        const response: any = res as any;

        /* if (response.responseCode === 1) {
           this.dataAdEd = response.pasajeros;
           this.Close(true);
         } else {
           this.dialog.open(DialogMessagesComponent, {
             minWidth: '320px',
             maxWidth: '632px',
             data: {message: response.responseDescription + ' 😅'}
           });
           this.Close(false);
         }*/
      });
    } else {

    }

  }
}

