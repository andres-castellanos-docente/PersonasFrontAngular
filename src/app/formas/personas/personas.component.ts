import {Component, OnInit, ViewChild} from '@angular/core';
import {PersonasService} from '../../services/personas.service';
import {MatTableDataSource} from '@angular/material/table';
import {PersonasModel} from '../../models/personas.model';
import {MatPaginator} from '@angular/material/paginator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {derAIzAnimation} from '../../animaciones/listanim.animations';
import {MatDialog} from '@angular/material/dialog';
import {DiagpersonasComponent} from './diagpersonas/diagpersonas.component';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
  animations: [derAIzAnimation]
})
export class PersonasComponent implements OnInit {
  constructor(private personasService: PersonasService, private formBuilder: FormBuilder, public dialog: MatDialog) {


  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<PersonasModel>;
  displayedColumns: string[] = ['primernombre', 'segundnombre', 'primerapellido', 'segundoapellido', 'ncelular', 'email'];
  dataPasajeros = [];
  personasForm: FormGroup;
  filtrado: boolean;
  mostrarGrid: boolean;

  ngOnInit(): void {
    this.mostrarGrid = false;
    this.personasService.listarPersonas().subscribe((res: Response) => {
      this.dataPasajeros = res as any;
      this.dataSource = new MatTableDataSource<PersonasModel>(this.dataPasajeros);
      this.dataSource.paginator = this.paginator;
      this.mostrarGrid = true;
    });

    /* this.personasForm = this.formBuilder.group({
       primerApellido: [{value: '', disabled: true}, Validators.required],
     });*/
    this.personasForm = this.formBuilder.group({
      primerApellido: ['', [Validators.required]]
    });
  }

  nuevaPersona(): void {
    const dialogRef = this.dialog.open(DiagpersonasComponent, {
      minWidth: '320px',
      maxWidth: '720px',
      data: {dataed: null}
    });
  }


  quitarFiltros(): void {
    this.mostrarGrid = false;
    this.dataSource = new MatTableDataSource<PersonasModel>(this.dataPasajeros);
    this.dataSource.paginator = this.paginator;
    this.filtrado = false;
    this.personasForm.controls.primerApellido.setValue(null);
    const self = this;
    setTimeout(() => {
      self.mostrarGrid = true;
    }, 100);
  }

  filtarPersona(): void {
    this.mostrarGrid = false;
    this.filtrado = false;
    if (this.personasForm.valid) {
      const apellido = this.personasForm.controls.primerApellido.value;
      this.personasService.listarPersonasxApell(apellido).subscribe((res: Response) => {
          this.filtrado = true;
          this.dataSource = new MatTableDataSource<PersonasModel>(res as any);
          this.dataSource.paginator = this.paginator;
          this.mostrarGrid = true;
        }
      );
    }
  }

}
