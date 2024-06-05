import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, Callback } from 'aws-lambda';
import { TYPES } from '../utils/constants';
import { injectable, inject } from 'inversify';

import { SortPeopleByAgeService } from '../services/sort-people-by-age-service';
import { SortPeopleByAgeController } from './sort-people-by-age-controller';

@injectable()
export class SortPeopleByAgeControllerImpl implements SortPeopleByAgeController {
    constructor(@inject(TYPES.SortPeopleByAgeService) private service: SortPeopleByAgeService) {}
    public async sortPeopleByAge(
        event: APIGatewayProxyEvent,
        context: Context,
        callback: Callback,
    ): Promise<APIGatewayProxyResult> {
        try {
            const { people } = JSON.parse(event.body);

            if (!Array.isArray(people)) {
                throw new Error('Invalid input');
            }

            return {
                statusCode: 200,
                body: JSON.stringify(this.service.sortPeopleByAge(people)),
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
