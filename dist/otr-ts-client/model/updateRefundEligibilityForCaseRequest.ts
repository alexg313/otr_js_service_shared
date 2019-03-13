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


export interface UpdateRefundEligibilityForCaseRequest { 
    refundOwner?: UpdateRefundEligibilityForCaseRequest.RefundOwnerEnum;
}
export namespace UpdateRefundEligibilityForCaseRequest {
    export type RefundOwnerEnum = 'OTR' | 'LAWFIRM' | 'NONE';
    export const RefundOwnerEnum = {
        OTR: 'OTR' as RefundOwnerEnum,
        LAWFIRM: 'LAWFIRM' as RefundOwnerEnum,
        NONE: 'NONE' as RefundOwnerEnum
    };
}
