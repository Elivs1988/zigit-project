import { Component, OnInit } from '@angular/core';

import { PersonalDetails } from 'src/app/interfaces/personal-details';
import { UserProjectsService } from 'src/app/services/user-projects/user-projects.service';
import { ProjectInfo } from 'src/app/interfaces/project-info';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  projectsInfo!: ProjectInfo[];
  personalDetails: PersonalDetails = {
    name: 'Test Test',
    Team: 'Developers',
    joinedAt: '2018-10-01',
    avatar: 'https://avatarfiles.alphacoders.com/164/thumb-164632.jpg',
  };
  constructor(private userProjects: UserProjectsService) {}

  ngOnInit(): void {
    this.userProjects.getUserProjects().subscribe(projects => {
      this.projectsInfo = projects;
    })
  }
}
