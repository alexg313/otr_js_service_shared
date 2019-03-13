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


export interface MarkCaseAsResolvedRequest { 
    adjustedFineAmount?: number;
    adjustedPointCount?: number;
    originalPointCount?: number;
    resolutionStatus?: MarkCaseAsResolvedRequest.ResolutionStatusEnum;
    resolutionSummary?: string;
}
export namespace MarkCaseAsResolvedRequest {
    export type ResolutionStatusEnum = 'UNCONFIRMED' | 'CLIENT_CONFIRMED_UNPAID' | 'STALE' | 'NO_LAWFIRM_AVAILABLE' | 'CLIENT_CONFIRMED' | 'CASE_IN_PROGRESS' | 'REFUSED_BY_LAWFIRM' | 'DISMISSED' | 'LOST' | 'AMENDED_NO_FINE' | 'AMENDED_FULL_FINE' | 'AMENDED_REDUCED_FINE' | 'AMENDED_INCREASED_FINE' | 'DEFERRED' | 'POINT_REDUCTION' | 'DIVERSION' | 'TRAFFIC_SCHOOL' | 'AMENDED_TO_NMV' | 'AMENDED_TO_INFRACTION' | 'AMENDED_DOWN_WITHIN_CLASS' | 'CANCELLED_BY_USER' | 'CANCELLED_BY_LAWFIRM' | 'CANCELLED_NO_LAWFIRM' | 'CANCELLED_NMV' | 'CANCELLED_ATTORNEY_AT_FAULT' | 'CANCELLED_OVERDUE' | 'CANCELLED_TOO_SHORT_NOTICE';
    export const ResolutionStatusEnum = {
        UNCONFIRMED: 'UNCONFIRMED' as ResolutionStatusEnum,
        CLIENTCONFIRMEDUNPAID: 'CLIENT_CONFIRMED_UNPAID' as ResolutionStatusEnum,
        STALE: 'STALE' as ResolutionStatusEnum,
        NOLAWFIRMAVAILABLE: 'NO_LAWFIRM_AVAILABLE' as ResolutionStatusEnum,
        CLIENTCONFIRMED: 'CLIENT_CONFIRMED' as ResolutionStatusEnum,
        CASEINPROGRESS: 'CASE_IN_PROGRESS' as ResolutionStatusEnum,
        REFUSEDBYLAWFIRM: 'REFUSED_BY_LAWFIRM' as ResolutionStatusEnum,
        DISMISSED: 'DISMISSED' as ResolutionStatusEnum,
        LOST: 'LOST' as ResolutionStatusEnum,
        AMENDEDNOFINE: 'AMENDED_NO_FINE' as ResolutionStatusEnum,
        AMENDEDFULLFINE: 'AMENDED_FULL_FINE' as ResolutionStatusEnum,
        AMENDEDREDUCEDFINE: 'AMENDED_REDUCED_FINE' as ResolutionStatusEnum,
        AMENDEDINCREASEDFINE: 'AMENDED_INCREASED_FINE' as ResolutionStatusEnum,
        DEFERRED: 'DEFERRED' as ResolutionStatusEnum,
        POINTREDUCTION: 'POINT_REDUCTION' as ResolutionStatusEnum,
        DIVERSION: 'DIVERSION' as ResolutionStatusEnum,
        TRAFFICSCHOOL: 'TRAFFIC_SCHOOL' as ResolutionStatusEnum,
        AMENDEDTONMV: 'AMENDED_TO_NMV' as ResolutionStatusEnum,
        AMENDEDTOINFRACTION: 'AMENDED_TO_INFRACTION' as ResolutionStatusEnum,
        AMENDEDDOWNWITHINCLASS: 'AMENDED_DOWN_WITHIN_CLASS' as ResolutionStatusEnum,
        CANCELLEDBYUSER: 'CANCELLED_BY_USER' as ResolutionStatusEnum,
        CANCELLEDBYLAWFIRM: 'CANCELLED_BY_LAWFIRM' as ResolutionStatusEnum,
        CANCELLEDNOLAWFIRM: 'CANCELLED_NO_LAWFIRM' as ResolutionStatusEnum,
        CANCELLEDNMV: 'CANCELLED_NMV' as ResolutionStatusEnum,
        CANCELLEDATTORNEYATFAULT: 'CANCELLED_ATTORNEY_AT_FAULT' as ResolutionStatusEnum,
        CANCELLEDOVERDUE: 'CANCELLED_OVERDUE' as ResolutionStatusEnum,
        CANCELLEDTOOSHORTNOTICE: 'CANCELLED_TOO_SHORT_NOTICE' as ResolutionStatusEnum
    };
}
