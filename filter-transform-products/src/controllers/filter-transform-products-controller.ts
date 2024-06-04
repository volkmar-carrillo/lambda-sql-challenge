import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, Callback } from 'aws-lambda';

export interface FilterTransformProductsController {
    filterTransformProducts(
        event: APIGatewayProxyEvent,
        context: Context,
        callback: Callback,
    ): Promise<APIGatewayProxyResult>;
}
