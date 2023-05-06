import { Employer } from './employer';
import { EmploymentType } from './employment-type';
import { MonthYear } from './month-year';

export interface Experience {
  title: string;
  employer: Employer;
  employmentType: EmploymentType;
  locationType: 'On-site' | 'Hybrid' | 'Remote';
  currentlyWorking: boolean;
  startDate: MonthYear;
  endDate?: MonthYear;
  industry: string;
  description: string[];
  skills: string[];
}
