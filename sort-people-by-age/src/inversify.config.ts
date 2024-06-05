import { Container } from 'inversify';
import { TYPES } from './utils/constants';
import { SortPeopleByAgeService } from './services/sort-people-by-age-service';
import { SortPeopleByAgeServiceImpl } from './services/sort-people-by-age-service-impl';
import { SortPeopleByAgeController } from './controllers/sort-people-by-age-controller';
import { SortPeopleByAgeControllerImpl } from './controllers/sort-people-by-age-controller-impl';

const AppContainer: Container = new Container();
AppContainer.bind<SortPeopleByAgeController>(TYPES.SortPeopleByAgeController).to(SortPeopleByAgeControllerImpl);
AppContainer.bind<SortPeopleByAgeService>(TYPES.SortPeopleByAgeService).to(SortPeopleByAgeServiceImpl);

export { AppContainer };
