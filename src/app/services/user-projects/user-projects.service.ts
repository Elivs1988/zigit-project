import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProjectInfo } from 'src/app/interfaces/project-info';

@Injectable({
  providedIn: 'root'
})
export class UserProjectsService {
  userPorjectsInfoUrl = 'https://private-052d6-testapi4528.apiary-mock.com/info';
  constructor(private http: HttpClient) { }

  getUserProjects():Observable<ProjectInfo[]> {
    return this.http.get<ProjectInfo[]>(this.userPorjectsInfoUrl);
  }
}
