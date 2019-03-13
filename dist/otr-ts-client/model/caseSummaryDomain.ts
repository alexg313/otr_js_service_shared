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


export interface CaseSummaryDomain { 
    bookingConfirmedDate?: Date;
    caseDecisionStatus?: CaseSummaryDomain.CaseDecisionStatusEnum;
    caseId?: string;
    caseStatus?: CaseSummaryDomain.CaseStatusEnum;
    citationId?: number;
    citationIssueDateUTC?: Date;
    courtDate?: Date;
    courtName?: string;
    firstName?: string;
    involvesAccident?: boolean;
    lastName?: string;
    ticketImageUrl?: string;
    violationCount?: number;
}
export namespace CaseSummaryDomain {
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
    export type CaseStatusEnum = 'UNCONFIRMED' | 'CLIENT_CONFIRMED_UNPAID' | 'STALE' | 'NO_LAWFIRM_AVAILABLE' | 'CLIENT_CONFIRMED' | 'CASE_IN_PROGRESS' | 'REFUSED_BY_LAWFIRM' | 'DISMISSED' | 'LOST' | 'AMENDED_NO_FINE' | 'AMENDED_FULL_FINE' | 'AMENDED_REDUCED_FINE' | 'AMENDED_INCREASED_FINE' | 'DEFERRED' | 'POINT_REDUCTION' | 'DIVERSION' | 'TRAFFIC_SCHOOL' | 'AMENDED_TO_NMV' | 'AMENDED_TO_INFRACTION' | 'AMENDED_DOWN_WITHIN_CLASS' | 'CANCELLED_BY_USER' | 'CANCELLED_BY_LAWFIRM' | 'CANCELLED_NO_LAWFIRM' | 'CANCELLED_NMV' | 'CANCELLED_ATTORNEY_AT_FAULT' | 'CANCELLED_OVERDUE' | 'CANCELLED_TOO_SHORT_NOTICE';
    export const CaseStatusEnum = {
        UNCONFIRMED: 'UNCONFIRMED' as CaseStatusEnum,
        CLIENTCONFIRMEDUNPAID: 'CLIENT_CONFIRMED_UNPAID' as CaseStatusEnum,
        STALE: 'STALE' as CaseStatusEnum,
        NOLAWFIRMAVAILABLE: 'NO_LAWFIRM_AVAILABLE' as CaseStatusEnum,
        CLIENTCONFIRMED: 'CLIENT_CONFIRMED' as CaseStatusEnum,
        CASEINPROGRESS: 'CASE_IN_PROGRESS' as CaseStatusEnum,
        REFUSEDBYLAWFIRM: 'REFUSED_BY_LAWFIRM' as CaseStatusEnum,
        DISMISSED: 'DISMISSED' as CaseStatusEnum,
        LOST: 'LOST' as CaseStatusEnum,
        AMENDEDNOFINE: 'AMENDED_NO_FINE' as CaseStatusEnum,
        AMENDEDFULLFINE: 'AMENDED_FULL_FINE' as CaseStatusEnum,
        AMENDEDREDUCEDFINE: 'AMENDED_REDUCED_FINE' as CaseStatusEnum,
        AMENDEDINCREASEDFINE: 'AMENDED_INCREASED_FINE' as CaseStatusEnum,
        DEFERRED: 'DEFERRED' as CaseStatusEnum,
        POINTREDUCTION: 'POINT_REDUCTION' as CaseStatusEnum,
        DIVERSION: 'DIVERSION' as CaseStatusEnum,
        TRAFFICSCHOOL: 'TRAFFIC_SCHOOL' as CaseStatusEnum,
        AMENDEDTONMV: 'AMENDED_TO_NMV' as CaseStatusEnum,
        AMENDEDTOINFRACTION: 'AMENDED_TO_INFRACTION' as CaseStatusEnum,
        AMENDEDDOWNWITHINCLASS: 'AMENDED_DOWN_WITHIN_CLASS' as CaseStatusEnum,
        CANCELLEDBYUSER: 'CANCELLED_BY_USER' as CaseStatusEnum,
        CANCELLEDBYLAWFIRM: 'CANCELLED_BY_LAWFIRM' as CaseStatusEnum,
        CANCELLEDNOLAWFIRM: 'CANCELLED_NO_LAWFIRM' as CaseStatusEnum,
        CANCELLEDNMV: 'CANCELLED_NMV' as CaseStatusEnum,
        CANCELLEDATTORNEYATFAULT: 'CANCELLED_ATTORNEY_AT_FAULT' as CaseStatusEnum,
        CANCELLEDOVERDUE: 'CANCELLED_OVERDUE' as CaseStatusEnum,
        CANCELLEDTOOSHORTNOTICE: 'CANCELLED_TOO_SHORT_NOTICE' as CaseStatusEnum
    };
}
