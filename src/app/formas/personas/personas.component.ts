import { Component, OnInit } from '@angular/core';
import {PersonasService} from '../../services/personas.service';
import {MatTableDataSource} from '@angular/material/table';
import {PersonasModel} from '../../models/personas.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  constructor(private personasService: PersonasService) {


  }
  dataSource: MatTableDataSource<PersonasModel>;
  displayedColumns: string[] = ['primernombre',  'segundnombre', 'primerapellido', 'segundoapellido', 'ncelular', 'email'];
  dataPasajeros = [];


  ngOnInit(): void {
    this.personasService.listarPersonas().subscribe((res: Response) => {
      this.dataPasajeros = res as any;
      this.dataSource = new MatTableDataSource<PersonasModel>(this.dataPasajeros);
     // this.dataSource.paginator = this.paginator;*/
    });



  }

}
