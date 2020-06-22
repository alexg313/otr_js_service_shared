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

export interface TrafficViolationTypeDomain {
    "insuranceIncreasePercent"?: number;
    "isMovingViolation"?: boolean;
    "trafficViolationDesc"?: string;
    "trafficViolationTypeId"?: number;
    "violationClassification"?: TrafficViolationTypeDomain.ViolationClassificationEnum;
    "violationCode"?: string;
}

export namespace TrafficViolationTypeDomain {
    export enum ViolationClassificationEnum {
        NONREPORTABLE = <any> 'NON_REPORTABLE',
        NONMOVING = <any> 'NON_MOVING',
        INFRACTION = <any> 'INFRACTION',
        MISDEMEANOR = <any> 'MISDEMEANOR',
        FELONY = <any> 'FELONY',
        WOBBLERTOMISDEMEANOR = <any> 'WOBBLER_TO_MISDEMEANOR',
        WOBBLERTOFELONY = <any> 'WOBBLER_TO_FELONY'
    }
}
