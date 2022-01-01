import { Action } from '@ngrx/store';
import { Project } from './../models/project.model';
import * as ProjectActions from '../actions/project.actions';

const initialState: Project[] = []; 

export function reducer(state: Project[] = initialState, action: ProjectActions.Actions) {
    switch(action.type) {
        case ProjectActions.UPDATE_PROJECTS:
            return action.payload;
        case ProjectActions.SORT_PROJECTS:
            return getSortedProjects(state, action.payload);
        default:
            return state;
    }
}


const getSortedProjects = (currentProjects: Project[], options: any) => {
    if(!currentProjects) return [];
    const projectsToSort = [...currentProjects];
    projectsToSort.sort()
}