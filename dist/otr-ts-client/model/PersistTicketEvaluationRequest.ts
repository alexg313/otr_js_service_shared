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

export interface PersistTicketEvaluationRequest {
    "citationId"?: number;
    "citationState"?: string;
    "emailAddress"?: string;
    "phoneNumber"?: string;
    "source"?: PersistTicketEvaluationRequest.SourceEnum;
    "submissionDateUtc"?: models.Timestamp;
    "visitorName"?: string;
}

export namespace PersistTicketEvaluationRequest {
    export enum SourceEnum {
        OTREXITPOPUP = <any> 'OTR_EXIT_POPUP',
        TICKETREVIEWPAGE = <any> 'TICKET_REVIEW_PAGE',
        QUARANTINELANDINGPAGE = <any> 'QUARANTINE_LANDING_PAGE'
    }
}
