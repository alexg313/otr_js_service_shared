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


export interface EstimateInsuranceSavingsRequest { 
    monthlyInsurancePremiumInCents: number;
    state: EstimateInsuranceSavingsRequest.StateEnum;
    ticketFineInCents: number;
    trafficViolationTypeId: number;
}
export namespace EstimateInsuranceSavingsRequest {
    export type StateEnum = 'ALABAMA' | 'ALASKA' | 'ARIZONA' | 'ARKANSAS' | 'CALIFORNIA' | 'COLORADO' | 'CONNECTICUT' | 'DELAWARE' | 'DISTRICT OF COLUMBIA' | 'FLORIDA' | 'GEORGIA' | 'HAWAII' | 'IDAHO' | 'ILLINOIS' | 'INDIANA' | 'IOWA' | 'KANSAS' | 'KENTUCKY' | 'LOUISIANA' | 'MAINE' | 'MARYLAND' | 'MASSACHUSETTS' | 'MICHIGAN' | 'MINNESOTA' | 'MISSISSIPPI' | 'MISSOURI' | 'MONTANA' | 'NEBRASKA' | 'NEVADA' | 'NEW HAMPSHIRE' | 'NEW JERSEY' | 'NEW MEXICO' | 'NEW YORK' | 'NORTH CAROLINA' | 'NORTH DAKOTA' | 'OHIO' | 'OKLAHOMA' | 'OREGON' | 'PENNSYLVANIA' | 'RHODE ISLAND' | 'SOUTH CAROLINA' | 'SOUTH DAKOTA' | 'TENNESSEE' | 'TEXAS' | 'UTAH' | 'VERMONT' | 'VIRGINIA' | 'WASHINGTON' | 'WEST VIRGINIA' | 'WISCONSIN' | 'WYOMING';
    export const StateEnum = {
        ALABAMA: 'ALABAMA' as StateEnum,
        ALASKA: 'ALASKA' as StateEnum,
        ARIZONA: 'ARIZONA' as StateEnum,
        ARKANSAS: 'ARKANSAS' as StateEnum,
        CALIFORNIA: 'CALIFORNIA' as StateEnum,
        COLORADO: 'COLORADO' as StateEnum,
        CONNECTICUT: 'CONNECTICUT' as StateEnum,
        DELAWARE: 'DELAWARE' as StateEnum,
        DISTRICTOFCOLUMBIA: 'DISTRICT OF COLUMBIA' as StateEnum,
        FLORIDA: 'FLORIDA' as StateEnum,
        GEORGIA: 'GEORGIA' as StateEnum,
        HAWAII: 'HAWAII' as StateEnum,
        IDAHO: 'IDAHO' as StateEnum,
        ILLINOIS: 'ILLINOIS' as StateEnum,
        INDIANA: 'INDIANA' as StateEnum,
        IOWA: 'IOWA' as StateEnum,
        KANSAS: 'KANSAS' as StateEnum,
        KENTUCKY: 'KENTUCKY' as StateEnum,
        LOUISIANA: 'LOUISIANA' as StateEnum,
        MAINE: 'MAINE' as StateEnum,
        MARYLAND: 'MARYLAND' as StateEnum,
        MASSACHUSETTS: 'MASSACHUSETTS' as StateEnum,
        MICHIGAN: 'MICHIGAN' as StateEnum,
        MINNESOTA: 'MINNESOTA' as StateEnum,
        MISSISSIPPI: 'MISSISSIPPI' as StateEnum,
        MISSOURI: 'MISSOURI' as StateEnum,
        MONTANA: 'MONTANA' as StateEnum,
        NEBRASKA: 'NEBRASKA' as StateEnum,
        NEVADA: 'NEVADA' as StateEnum,
        NEWHAMPSHIRE: 'NEW HAMPSHIRE' as StateEnum,
        NEWJERSEY: 'NEW JERSEY' as StateEnum,
        NEWMEXICO: 'NEW MEXICO' as StateEnum,
        NEWYORK: 'NEW YORK' as StateEnum,
        NORTHCAROLINA: 'NORTH CAROLINA' as StateEnum,
        NORTHDAKOTA: 'NORTH DAKOTA' as StateEnum,
        OHIO: 'OHIO' as StateEnum,
        OKLAHOMA: 'OKLAHOMA' as StateEnum,
        OREGON: 'OREGON' as StateEnum,
        PENNSYLVANIA: 'PENNSYLVANIA' as StateEnum,
        RHODEISLAND: 'RHODE ISLAND' as StateEnum,
        SOUTHCAROLINA: 'SOUTH CAROLINA' as StateEnum,
        SOUTHDAKOTA: 'SOUTH DAKOTA' as StateEnum,
        TENNESSEE: 'TENNESSEE' as StateEnum,
        TEXAS: 'TEXAS' as StateEnum,
        UTAH: 'UTAH' as StateEnum,
        VERMONT: 'VERMONT' as StateEnum,
        VIRGINIA: 'VIRGINIA' as StateEnum,
        WASHINGTON: 'WASHINGTON' as StateEnum,
        WESTVIRGINIA: 'WEST VIRGINIA' as StateEnum,
        WISCONSIN: 'WISCONSIN' as StateEnum,
        WYOMING: 'WYOMING' as StateEnum
    };
}