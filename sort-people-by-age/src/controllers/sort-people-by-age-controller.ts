import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, Callback } from 'aws-lambda';

export interface SortPeopleByAgeController {
    sortPeopleByAge(event: APIGatewayProxyEvent, context: Context, callback: Callback): Promise<APIGatewayProxyResult>;
}
