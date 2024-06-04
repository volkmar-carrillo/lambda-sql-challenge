import { Container } from 'inversify';
import { TYPES } from './utils/constants';
import { FilterTransformProductsController } from './controllers/filter-transform-products-controller';
import { FilterTransformProductsControllerImpl } from './controllers/filter-transform-products-controller-impl';
import { FilterTransformProductsService } from './services/filter-transform-products-service';
import { FilterTransformProductsServiceImpl } from './services/filter-transform-products-service-impl';

const AppContainer: Container = new Container();
AppContainer.bind<FilterTransformProductsController>(TYPES.FilterTransformProductsController).to(
    FilterTransformProductsControllerImpl,
);
AppContainer.bind<FilterTransformProductsService>(TYPES.FilterTransformProductsService).to(
    FilterTransformProductsServiceImpl,
);

export { AppContainer };
