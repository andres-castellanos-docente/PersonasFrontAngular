import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PersonasModel} from '../../../models/personas.model';
import {PersonasService} from '../../../services/personas.service';
import {DiagmessagesComponent} from "../diagmessages/diagmessages.component";

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
                private personasService: PersonasService, public diagmessag: MatDialog,
                public diagpers: MatDialogRef<DiagpersonasComponent>) {
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
                this.diagpers.close({result: 1, dataAgg: response});

                const dialogRef = this.diagmessag.open(DiagmessagesComponent, {
                    minWidth: '320px',
                    maxWidth: '720px',
                    data: {messag: 'Se guardó Correctamente.'}
                });
            });
        } else {
            this.personasService.editarPersona(PersonasModelEnv).subscribe((res: Response) => {
                const response: any = res as any;
                this.diagpers.close({result: 2, dataEd: response});

                const dialogRef = this.diagmessag.open(DiagmessagesComponent, {
                    minWidth: '320px',
                    maxWidth: '720px',
                    data: {messag: 'Se editó Correctamente. 😁'}
                });
            });
        }

    }

}

