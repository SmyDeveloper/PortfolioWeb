import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/modelo/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit{

  nombre: string;
  porcentaje: number;

  constructor(private shabilidades: HabilidadesService, private router: Router) {}

  ngOnInit(): void{

  }

  onCreate(): void{
    const habilidades = new Habilidades(this.nombre, this.porcentaje);
    this.shabilidades.save(habilidades).subscribe(
      {
        next: data => {
          alert("Habilidad añadida");
          this.router.navigate(['']);
      },
        error: err => {
          alert("Falló");
          this.router.navigate(['']);
      
      }
      });
  }
}
