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


export interface PushNotificationRegistrationRequest { 
    deviceToken?: string;
    platformType?: PushNotificationRegistrationRequest.PlatformTypeEnum;
}
export namespace PushNotificationRegistrationRequest {
    export type PlatformTypeEnum = 'IOS' | 'WEBAPP' | 'ANDROID';
    export const PlatformTypeEnum = {
        IOS: 'IOS' as PlatformTypeEnum,
        WEBAPP: 'WEBAPP' as PlatformTypeEnum,
        ANDROID: 'ANDROID' as PlatformTypeEnum
    };
}