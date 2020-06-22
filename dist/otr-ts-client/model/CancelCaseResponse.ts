/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as models from './models';

export interface CancelCaseResponse {
    "caseCancellationDate"?: string;
    "statusCategory"?: CancelCaseResponse.StatusCategoryEnum;
    "statusFriendlyName"?: string;
}

export namespace CancelCaseResponse {
    export enum StatusCategoryEnum {
        UNCONFIRMED = <any> 'UNCONFIRMED',
        ACTIVE = <any> 'ACTIVE',
        RESOLVED = <any> 'RESOLVED',
        CANCELLED = <any> 'CANCELLED'
    }
}
