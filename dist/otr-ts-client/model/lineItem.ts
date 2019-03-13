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


export interface LineItem { 
    feeAmount?: number;
    lineItemType?: LineItem.LineItemTypeEnum;
}
export namespace LineItem {
    export type LineItemTypeEnum = 'BASE_LEGAL_FEE' | 'MVS_FEE' | 'WARRANT_FEE' | 'FTA_FEE' | 'CDL_FEE' | 'OUT_OF_STATE_FEE' | 'SHORT_NOTICE_FEE' | 'LATE_NOTICE_FEE' | 'SPEEDING_100_FEE' | 'PAYMENT_PLAN_SERVICE_FEE';
    export const LineItemTypeEnum = {
        BASELEGALFEE: 'BASE_LEGAL_FEE' as LineItemTypeEnum,
        MVSFEE: 'MVS_FEE' as LineItemTypeEnum,
        WARRANTFEE: 'WARRANT_FEE' as LineItemTypeEnum,
        FTAFEE: 'FTA_FEE' as LineItemTypeEnum,
        CDLFEE: 'CDL_FEE' as LineItemTypeEnum,
        OUTOFSTATEFEE: 'OUT_OF_STATE_FEE' as LineItemTypeEnum,
        SHORTNOTICEFEE: 'SHORT_NOTICE_FEE' as LineItemTypeEnum,
        LATENOTICEFEE: 'LATE_NOTICE_FEE' as LineItemTypeEnum,
        SPEEDING100FEE: 'SPEEDING_100_FEE' as LineItemTypeEnum,
        PAYMENTPLANSERVICEFEE: 'PAYMENT_PLAN_SERVICE_FEE' as LineItemTypeEnum
    };
}
