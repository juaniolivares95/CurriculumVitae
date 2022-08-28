import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/api/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills: Skill[]=[];
  constructor(private skillService:SkillService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  /*Metodo para obtener los proyectos de Persona*/ 
  public getSkills():void{
    this.skillService.getSkills().subscribe({
      next:(Response: Skill[] )=>{
        this.skills=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteSkill(id_skill:number):void{
    this.skillService.deleteSkill(id_skill).subscribe({
      next:(response: void )=>{
        console.log(response)
        this.getSkills;
        window.location.reload();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
