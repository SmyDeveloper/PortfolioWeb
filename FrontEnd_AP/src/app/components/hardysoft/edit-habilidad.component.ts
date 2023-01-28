import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/modelo/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit{

  habilidades: Habilidades = null;

  constructor(private habilidads: HabilidadesService, private activatedRouter: ActivatedRoute, private router: Router ){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidads.detail(id).subscribe(
      {
        next: data=>{
          this.habilidades = data;
      },
        error: err=> {
          alert("Error en actualizar habilidad");
          this.router.navigate(['']);
        }
        
      });
    
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidads.update(id, this.habilidades).subscribe(
      {
        next: data => {
        this.router.navigate(['']);
      }, 
        error: err =>{
        alert("Error en actualizar datos");
        this.router.navigate(['']);
        }

      });
  }

}
