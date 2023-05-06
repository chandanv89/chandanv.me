import { Experience } from './experience';

export interface Bio {
  firstName: string;
  lastName: string;
  about: string[];
  intro: string[];
  experience: Experience[];
}
