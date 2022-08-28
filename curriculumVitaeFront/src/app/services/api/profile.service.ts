import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiServerUrl='http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  public getProfile():Observable<Profile>{
    return this.http.get<Profile>(`${this.apiServerUrl}profile/1`)
  }

  public putProfile(profile : Profile):Observable<Profile>{
    return this.http.put<Profile>(`${this.apiServerUrl}profile/1`, profile);
  }
  
}
