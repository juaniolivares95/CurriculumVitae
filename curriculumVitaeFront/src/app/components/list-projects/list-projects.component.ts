import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/api/project.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  public projects: Project[]=[];

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects():void{
    this.projectService.getProjects().subscribe({
      next:(Response: Project[] )=>{
        this.projects=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
