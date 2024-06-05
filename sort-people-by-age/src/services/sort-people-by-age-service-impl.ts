import { injectable } from 'inversify';

import { SortPeopleByAgeService } from './sort-people-by-age-service';
import { Person } from '../models/app/person-info';

@injectable()
export class SortPeopleByAgeServiceImpl implements SortPeopleByAgeService {
    sortPeopleByAge(people: Person[]): Person[] {
        return people.sort((a, b) => b.age - a.age);
    }
}
