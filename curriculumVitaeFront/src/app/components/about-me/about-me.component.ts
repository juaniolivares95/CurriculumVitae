import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/api/profile.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public profile: Profile  | undefined;
  public editProfile: Profile  | undefined;
  modalEdit:boolean=false;
  
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.getProfile();
    
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

  public onOpenModal(mode:String, profile?:Profile){
    const container=document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode == 'edit'){
      this.modalEdit = true;
      this.editProfile=profile;
      button.setAttribute('data-target','#editDatos')
    }
  }


  public updateProfile(profile : Profile){
    this.editProfile = profile;
    this.profileService.putProfile(profile).subscribe({
        next:(response : Profile)=>{
          console.log(response);
          this.getProfile();
          window.location.reload();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
    })
  }

}
