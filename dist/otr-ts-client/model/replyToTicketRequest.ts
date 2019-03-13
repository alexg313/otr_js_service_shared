/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface ReplyToTicketRequest { 
    htmlReply?: string;
    newTicketStatus?: ReplyToTicketRequest.NewTicketStatusEnum;
}
export namespace ReplyToTicketRequest {
    export type NewTicketStatusEnum = 'OPEN' | 'PENDING' | 'RESOLVED' | 'CLOSED' | 'WAITING_ON_CUSTOMER' | 'WAITING_ON_THIRD_PARTY' | 'WAITING_ON_ATTORNEY' | 'WAITING_ON_OTR' | 'QUEUED_FOR_AUTOMATION';
    export const NewTicketStatusEnum = {
        OPEN: 'OPEN' as NewTicketStatusEnum,
        PENDING: 'PENDING' as NewTicketStatusEnum,
        RESOLVED: 'RESOLVED' as NewTicketStatusEnum,
        CLOSED: 'CLOSED' as NewTicketStatusEnum,
        WAITINGONCUSTOMER: 'WAITING_ON_CUSTOMER' as NewTicketStatusEnum,
        WAITINGONTHIRDPARTY: 'WAITING_ON_THIRD_PARTY' as NewTicketStatusEnum,
        WAITINGONATTORNEY: 'WAITING_ON_ATTORNEY' as NewTicketStatusEnum,
        WAITINGONOTR: 'WAITING_ON_OTR' as NewTicketStatusEnum,
        QUEUEDFORAUTOMATION: 'QUEUED_FOR_AUTOMATION' as NewTicketStatusEnum
    };
}