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
import { UserDomain } from './userDomain';


export interface RegisterNewUserRequest { 
    clientType: RegisterNewUserRequest.ClientTypeEnum;
    httpReferrer: string;
    isAutoLogin: boolean;
    otherNote: string;
    referralCode: string;
    referralSourceData: { [key: string]: any; };
    roleType: RegisterNewUserRequest.RoleTypeEnum;
    user: UserDomain;
    userReferralSourceTypeId: number;
}
export namespace RegisterNewUserRequest {
    export type ClientTypeEnum = 'UNKNOWN' | 'IOS' | 'ANDROID' | 'MOBILE_WEBAPP' | 'DESKTOP_WEBAPP' | 'OTR_LAWFIRM_PORTAL' | 'OTR_ADMIN_CONSOLE' | 'OTR_WEBSITE' | 'OTR_EXPLORER' | 'FRESH_DESK' | 'LOCALHOST' | 'DMV_ORG';
    export const ClientTypeEnum = {
        UNKNOWN: 'UNKNOWN' as ClientTypeEnum,
        IOS: 'IOS' as ClientTypeEnum,
        ANDROID: 'ANDROID' as ClientTypeEnum,
        MOBILEWEBAPP: 'MOBILE_WEBAPP' as ClientTypeEnum,
        DESKTOPWEBAPP: 'DESKTOP_WEBAPP' as ClientTypeEnum,
        OTRLAWFIRMPORTAL: 'OTR_LAWFIRM_PORTAL' as ClientTypeEnum,
        OTRADMINCONSOLE: 'OTR_ADMIN_CONSOLE' as ClientTypeEnum,
        OTRWEBSITE: 'OTR_WEBSITE' as ClientTypeEnum,
        OTREXPLORER: 'OTR_EXPLORER' as ClientTypeEnum,
        FRESHDESK: 'FRESH_DESK' as ClientTypeEnum,
        LOCALHOST: 'LOCALHOST' as ClientTypeEnum,
        DMVORG: 'DMV_ORG' as ClientTypeEnum
    };
    export type RoleTypeEnum = 'LAWYER' | 'DEFENDANT' | 'ADMIN' | 'PARTNER' | 'UNKNOWN';
    export const RoleTypeEnum = {
        LAWYER: 'LAWYER' as RoleTypeEnum,
        DEFENDANT: 'DEFENDANT' as RoleTypeEnum,
        ADMIN: 'ADMIN' as RoleTypeEnum,
        PARTNER: 'PARTNER' as RoleTypeEnum,
        UNKNOWN: 'UNKNOWN' as RoleTypeEnum
    };
}
