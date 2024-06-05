import 'reflect-metadata';
import { SortPeopleByAgeController } from './controllers/sort-people-by-age-controller';
import { AppContainer } from './inversify.config';
import { TYPES } from './utils/constants';

async function sortPeopleByAge(event: any, context: any, callback: any) {
    const controller = AppContainer.get<SortPeopleByAgeController>(TYPES.SortPeopleByAgeController);
    console.info('Event: ', event);
    return await controller.sortPeopleByAge(event, context, callback);
}

export = {
    sortPeopleByAge,
};
