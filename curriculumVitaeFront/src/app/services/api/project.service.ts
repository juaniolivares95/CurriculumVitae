import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiServerUrl='http://localhost:8080/api/project';
  constructor(private http:HttpClient) { }

  public getProjects():Observable<Project[]>{        
      return this.http.get<Project[]>(`${this.apiServerUrl}/list`);
  }
}
