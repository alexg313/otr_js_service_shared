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

export interface SaveLawyerLeadRequest {
    "city"?: string;
    "email"?: string;
    "firstname"?: string;
    "lastname"?: string;
    "leadProvidedSource"?: SaveLawyerLeadRequest.LeadProvidedSourceEnum;
    "phoneNumber"?: string;
    "state"?: string;
    "website"?: string;
}

export namespace SaveLawyerLeadRequest {
    export enum LeadProvidedSourceEnum {
        NMA = <any> 'NMA',
        GOOGLEAD = <any> 'GOOGLE_AD',
        DIRECTMAIL = <any> 'DIRECT_MAIL',
        EMAILAD = <any> 'EMAIL_AD',
        OTHER = <any> 'OTHER',
        UNKNOWN = <any> 'UNKNOWN'
    }
}
