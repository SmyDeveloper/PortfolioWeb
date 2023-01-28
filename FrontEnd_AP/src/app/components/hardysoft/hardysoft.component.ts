import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/modelo/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-hardysoft',
  templateUrl: './hardysoft.component.html',
  styleUrls: ['./hardysoft.component.css']
})
export class HardysoftComponent implements OnInit {

  habilidades: Habilidades [] = [];

  constructor(private habilidadser: HabilidadesService, private tokenService: TokenService) {}

  isLogged = false;


  ngOnInit(): void {
    this.cargarHabilidades();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidades(): void {
    this.habilidadser.lista().subscribe(
      data => {
        this.habilidades = data;
      }
          
    )
  }

  delete(id: number){
    if(id != undefined){
      this.habilidadser.delete(id).subscribe(
        {
          next: data => {
            this.cargarHabilidades();
        },
          error: err => {
            alert('Falló en borrar la habilidad');
        
        }
        });
    }
  }



}
