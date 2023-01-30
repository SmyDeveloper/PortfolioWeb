import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/modelo/persona.modelo';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css']
})
export class EditacercadeComponent implements OnInit{

  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router,
    public imageService: ImageService) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(
      {
        next: data =>{
          this.router.navigate(['']);
      
      
      }, 
        error: err =>{
        alert('Error al Acualizar los datos');
        this.router.navigate(['']);
      }
      }
    )
  }

  uploadImage($event:any){

    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
  }

}
