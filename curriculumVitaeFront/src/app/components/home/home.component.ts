import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/api/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public profile: Profile  | undefined;

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

}
