import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, Callback } from 'aws-lambda';
import { TYPES } from '../utils/constants';
import { injectable, inject } from 'inversify';

import { FilterTransformProductsService } from '../services/filter-transform-products-service';
import { FilterTransformProductsController } from './filter-transform-products-controller';

@injectable()
export class FilterTransformProductsControllerImpl implements FilterTransformProductsController {
    constructor(@inject(TYPES.FilterTransformProductsService) private service: FilterTransformProductsService) {}
    public async filterTransformProducts(
        event: APIGatewayProxyEvent,
        context: Context,
        callback: Callback,
    ): Promise<APIGatewayProxyResult> {
        try {
            const { products, minPrice } = JSON.parse(event.body);

            if (!Array.isArray(products) || typeof minPrice !== 'number') {
                throw new Error('Invalid input');
            }

            const filteredProducts: string[] = this.service.filterAndTransform(products, minPrice);

            return {
                statusCode: 200,
                body: JSON.stringify({ filteredProducts }),
            };
        } catch (error) {
            console.error(error);
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'An error occurred', error: error }),
            };
        }
    }
}
