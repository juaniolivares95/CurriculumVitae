import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { Profile } from 'src/app/models/profile';
import { Skill } from 'src/app/models/skill';
import { ExperienceService } from 'src/app/services/api/experience.service';
import { ProfileService } from 'src/app/services/api/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public experiences: Experience[]=[];
  public profile: Profile  | undefined;
  
  constructor(private experienceService:ExperienceService, private profileService:ProfileService) { }

  ngOnInit(): void {
    this.getExperiences();
    this.getProfile();
  }

  public getExperiences():void{
    this.experienceService.getExperinces().subscribe({
      next:(Response: Experience[])=>{
        this.experiences = Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public getProfile():void{
    this.profileService.getProfile().subscribe({
      next:(response : Profile)=>{
        this.profile=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
