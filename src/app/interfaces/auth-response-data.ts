import { PersonalDetails } from './personal-details';

export interface AuthResponseData {
    token: string,
    personalDetails: PersonalDetails,
}