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
import { TrafficViolationTypeDomain } from './trafficViolationTypeDomain';


export interface GetTrafficViolationTypesResponse { 
    exclusionPatterns?: Array<string>;
    violationTypes?: Array<TrafficViolationTypeDomain>;
}
