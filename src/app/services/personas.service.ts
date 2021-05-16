import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {PersonasModel} from '../models/personas.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {


  constructor( private http: HttpClient) {
  }
  path = '/personas';
  pathfilt = '/personasporapellido/';

  listarPersonas(): Observable<any> {
    return this.http.get(environment.apiUrl + this.path, {});
  }

  listarPersonasxApell(primerApellido: string): Observable<any> {
    return this.http.get(environment.apiUrl + this.pathfilt + primerApellido  , {});
  }

  crearPersona(request: PersonasModel): Observable<any> {
    return this.http.post(environment.apiUrl + this.path, request, {});
  }

}
