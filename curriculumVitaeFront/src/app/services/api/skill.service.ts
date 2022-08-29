import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiServerUrl='/api/skill';

  constructor(private http:HttpClient) { }

  public getSkills():Observable<Skill[]>{        /*Metodo que nos va a traer a todas las tecnologias a travez de una peticion GET*/
      return this.http.get<Skill[]>(`${this.apiServerUrl}/list`);
  }
  public deleteSkill(id_skill:number):Observable<void>{            /*Metodo que nos va a permtir eliminar tecnologias x ID en nuestra BD a travez de una peticion DELETE*/
   return this.http.delete<void>(`${this.apiServerUrl}/${id_skill}`); 
  }
  

}
