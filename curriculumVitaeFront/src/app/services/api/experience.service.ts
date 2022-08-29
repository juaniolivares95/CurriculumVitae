import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiServerUrl='/api/experience';

  constructor(private http:HttpClient) { }

  public getExperinces():Observable<Experience[]>{        
      return this.http.get<Experience[]>(`${this.apiServerUrl}/list`);
  }
}
