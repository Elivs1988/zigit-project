import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProjectInfo } from 'src/app/interfaces/project-info';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css'],
})
export class UserProjectsComponent implements OnChanges {
  @Input() projectsInfo!: ProjectInfo[];
  userProjects = {
    header: {
      columns: [
        {
          key: 'name',
          title: 'Project Name',
        },
        {
          key: 'score',
          title: 'Project Score',
        },
        {
          key: 'durationInDays',
          title: 'Duration (Days)',
        },
        {
          key: 'bugsCount',
          title: 'Number Of Bugs',
        },
        {
          key: 'madeDeadline',
          title: 'Made Deadline',
        },
      ],
    },
    body: {
      rows: [],
    },
  };
  constructor() {}
  getClassesByProjectScore(score: number) {
    const scoreClasses = [];
    if(score > 90) scoreClasses.push('table-success');
    if(score < 70) scoreClasses.push('table-danger');
    return scoreClasses;
  }
  ngOnChanges(changes: SimpleChanges) {
    const projects = changes['projectsInfo'].currentValue;
    if(!projects) {
      this.userProjects.body.rows = [];
      return;
    }
    this.userProjects.body.rows = projects.map((project:ProjectInfo) => {
      const rowClasses = [
        ...this.getClassesByProjectScore(project.score)
      ]
      return {
        data: {...project, madeDeadline: project.madeDadeline ? 'Yes' : 'No'},
        classes: rowClasses,
      }
    });
  }
}
