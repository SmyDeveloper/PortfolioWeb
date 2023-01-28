import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Habilidades } from '../modelo/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  URL = 'https://smydeveloper-williams1355.koyeb.app/habilidades/';

  constructor( private httpClient: HttpClient) { }

  public lista(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.URL + `detail/${id}`);
  }

  public save(habilidades: Habilidades): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', habilidades);
  }

  public update(id: number, habilidades: Habilidades): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, habilidades);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }


}
