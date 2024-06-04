import 'reflect-metadata';
import { FilterTransformProductsController } from './controllers/filter-transform-products-controller';
import { AppContainer } from './inversify.config';
import { TYPES } from './utils/constants';

async function filterTransformProducts(event: any, context: any, callback: any) {
    const controller = AppContainer.get<FilterTransformProductsController>(TYPES.FilterTransformProductsController);
    console.info('Event: ', event);
    return await controller.filterTransformProducts(event, context, callback);
}

export = {
    filterTransformProducts,
};
