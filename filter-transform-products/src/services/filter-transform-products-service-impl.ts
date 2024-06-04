import { injectable } from 'inversify';
import { TYPES } from '../utils/constants';

import { FilterTransformProductsService } from './filter-transform-products-service';
import { Product } from '../models/app/product-info';

@injectable()
export class FilterTransformProductsServiceImpl implements FilterTransformProductsService {
    filterAndTransform(products: Product[], minPrice: number): string[] {
        return products.filter((product) => product.price > minPrice).map((product) => product.name.toUpperCase());
    }
}
