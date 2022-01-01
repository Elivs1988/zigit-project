import {PersonalDetails} from 'src/app/interfaces/personal-details';
import {ProjectInfo} from 'src/app/interfaces/project-info';

export interface User {
    token: string,
    personalDetaild: PersonalDetails,
    projectsInfo: ProjectInfo[], 
}