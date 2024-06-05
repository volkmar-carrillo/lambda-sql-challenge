import { Person } from '../models/app/person-info';

export interface SortPeopleByAgeService {
    sortPeopleByAge(people: Person[]): Person[];
}
