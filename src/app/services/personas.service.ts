import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {


  constructor( private http: HttpClient) {
  }
  path = '/personas';

  listarPersonas(): Observable<any> {
    return this.http.get(environment.apiUrl + this.path, {});
  }

}
