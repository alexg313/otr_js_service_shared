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


export interface SetLawfirmCaseDecisionRequest { 
    caseDecisionStatus?: SetLawfirmCaseDecisionRequest.CaseDecisionStatusEnum;
    reason?: string;
}
export namespace SetLawfirmCaseDecisionRequest {
    export type CaseDecisionStatusEnum = 'CREATED' | 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED' | 'REMATCHED' | 'REMATCHED_REFERRAL';
    export const CaseDecisionStatusEnum = {
        CREATED: 'CREATED' as CaseDecisionStatusEnum,
        PENDING: 'PENDING' as CaseDecisionStatusEnum,
        ACCEPTED: 'ACCEPTED' as CaseDecisionStatusEnum,
        DECLINED: 'DECLINED' as CaseDecisionStatusEnum,
        EXPIRED: 'EXPIRED' as CaseDecisionStatusEnum,
        REMATCHED: 'REMATCHED' as CaseDecisionStatusEnum,
        REMATCHEDREFERRAL: 'REMATCHED_REFERRAL' as CaseDecisionStatusEnum
    };
}
