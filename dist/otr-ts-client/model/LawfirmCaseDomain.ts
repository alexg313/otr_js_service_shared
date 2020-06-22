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

export interface LawfirmCaseDomain {
    "caseDecisionStatus"?: LawfirmCaseDomain.CaseDecisionStatusEnum;
    "clientDeclineTicket"?: models.FreshDeskTicket;
    "declineReason"?: string;
    "lawfirmCaseId"?: number;
    "lawfirmDecisionDateUtc"?: models.Timestamp;
    "lawfirmDeclineTicket"?: models.FreshDeskTicket;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmPrimaryEmail"?: string;
    "lawfirmReceiptDateUtc"?: models.Timestamp;
    "obfuscatedPictureUrl"?: string;
    "profilePictureUrl"?: string;
    "refundOwner"?: LawfirmCaseDomain.RefundOwnerEnum;
}

export namespace LawfirmCaseDomain {
    export enum CaseDecisionStatusEnum {
        CREATED = <any> 'CREATED',
        PENDING = <any> 'PENDING',
        ACCEPTED = <any> 'ACCEPTED',
        DECLINED = <any> 'DECLINED',
        EXPIRED = <any> 'EXPIRED',
        REMATCHED = <any> 'REMATCHED',
        REMATCHEDREFERRAL = <any> 'REMATCHED_REFERRAL'
    }
    export enum RefundOwnerEnum {
        OTR = <any> 'OTR',
        LAWFIRM = <any> 'LAWFIRM',
        NONE = <any> 'NONE'
    }
}
