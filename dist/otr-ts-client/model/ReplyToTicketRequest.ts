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

export interface ReplyToTicketRequest {
    "htmlReply"?: string;
    "newTicketStatus"?: ReplyToTicketRequest.NewTicketStatusEnum;
}

export namespace ReplyToTicketRequest {
    export enum NewTicketStatusEnum {
        OPEN = <any> 'OPEN',
        PENDING = <any> 'PENDING',
        RESOLVED = <any> 'RESOLVED',
        CLOSED = <any> 'CLOSED',
        WAITINGONCUSTOMER = <any> 'WAITING_ON_CUSTOMER',
        WAITINGONTHIRDPARTY = <any> 'WAITING_ON_THIRD_PARTY',
        WAITINGONATTORNEY = <any> 'WAITING_ON_ATTORNEY',
        WAITINGONOTR = <any> 'WAITING_ON_OTR',
        QUEUEDFORAUTOMATION = <any> 'QUEUED_FOR_AUTOMATION'
    }
}
