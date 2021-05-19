import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder} from "@angular/forms";
import {DiagmessagesComponent} from "../diagmessages/diagmessages.component";
import {PersonasService} from "../../../services/personas.service";

@Component({
    selector: 'app-diagconf',
    templateUrl: './diagconf.component.html',
    styleUrls: ['./diagconf.component.scss']
})
export class DiagconfComponent implements OnInit {

    constructor(private personasService: PersonasService, public diagconf: MatDialogRef<DiagconfComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    }

    mensaje: string;
    idPersonaElim: number;

    ngOnInit(): void {
        this.mensaje = this.data.messag;
        this.idPersonaElim = this.data.idPersonaElim;
    }

    aceptar(): void {

        this.personasService.eliminarPersona(this.idPersonaElim).subscribe((res: Response) => {
            const response = res as any;
            let mensaje = '';

            if (response === 1) {
                this.diagconf.close(1);
                mensaje = 'Se eliminó Correctamente' + ' 😅';
            } else {
                mensaje = 'Falló al Eliminar' + ' 😅';

            }
            this.dialog.open(DiagmessagesComponent, {
                minWidth: '320px',
                maxWidth: '632px',
                data: {messag: mensaje}
            });

        });


    }

}
