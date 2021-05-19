import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-diagmessages',
  templateUrl: './diagmessages.component.html',
  styleUrls: ['./diagmessages.component.scss']
})
export class DiagmessagesComponent implements OnInit {

  mensaje: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.mensaje = this.data.messag;
  }

}
