import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiServerUrl='http://localhost:8080/api/education';

  constructor(private http:HttpClient) { }

  public getEducations():Observable<Education[]>{       
      return this.http.get<Education[]>(`${this.apiServerUrl}/list`);
  }

}
