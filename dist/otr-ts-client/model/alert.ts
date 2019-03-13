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


export interface Alert { 
    actionType?: Alert.ActionTypeEnum;
    alertId?: string;
    alertType?: Alert.AlertTypeEnum;
    bannerMessage?: string;
    clickThruUrl?: string;
    hexColor?: number;
}
export namespace Alert {
    export type ActionTypeEnum = 'ANNOUNCEMENT' | 'ENGAGEMENT_LETTER';
    export const ActionTypeEnum = {
        ANNOUNCEMENT: 'ANNOUNCEMENT' as ActionTypeEnum,
        ENGAGEMENTLETTER: 'ENGAGEMENT_LETTER' as ActionTypeEnum
    };
    export type AlertTypeEnum = 'SUCCESS' | 'INFO' | 'WARNING' | 'ERROR';
    export const AlertTypeEnum = {
        SUCCESS: 'SUCCESS' as AlertTypeEnum,
        INFO: 'INFO' as AlertTypeEnum,
        WARNING: 'WARNING' as AlertTypeEnum,
        ERROR: 'ERROR' as AlertTypeEnum
    };
}
