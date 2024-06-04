import { Product } from '../models/app/product-info';

export interface FilterTransformProductsService {
    filterAndTransform(products: Product[], minPrice: number): string[];
}
