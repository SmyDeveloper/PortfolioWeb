import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../modelo/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL= 'https://smydeveloper-williams1355.koyeb.app/personas/';


  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }

}
