"use strict";
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
exports.__esModule = true;
var MarkCaseAsResolvedRequest;
(function (MarkCaseAsResolvedRequest) {
    var ResolutionStatusEnum;
    (function (ResolutionStatusEnum) {
        ResolutionStatusEnum[ResolutionStatusEnum["UNCONFIRMED"] = 'UNCONFIRMED'] = "UNCONFIRMED";
        ResolutionStatusEnum[ResolutionStatusEnum["CLIENTCONFIRMEDUNPAID"] = 'CLIENT_CONFIRMED_UNPAID'] = "CLIENTCONFIRMEDUNPAID";
        ResolutionStatusEnum[ResolutionStatusEnum["STALE"] = 'STALE'] = "STALE";
        ResolutionStatusEnum[ResolutionStatusEnum["NOLAWFIRMAVAILABLE"] = 'NO_LAWFIRM_AVAILABLE'] = "NOLAWFIRMAVAILABLE";
        ResolutionStatusEnum[ResolutionStatusEnum["CLIENTCONFIRMED"] = 'CLIENT_CONFIRMED'] = "CLIENTCONFIRMED";
        ResolutionStatusEnum[ResolutionStatusEnum["CASEINPROGRESS"] = 'CASE_IN_PROGRESS'] = "CASEINPROGRESS";
        ResolutionStatusEnum[ResolutionStatusEnum["REFUSEDBYLAWFIRM"] = 'REFUSED_BY_LAWFIRM'] = "REFUSEDBYLAWFIRM";
        ResolutionStatusEnum[ResolutionStatusEnum["DISMISSED"] = 'DISMISSED'] = "DISMISSED";
        ResolutionStatusEnum[ResolutionStatusEnum["LOST"] = 'LOST'] = "LOST";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDNOFINE"] = 'AMENDED_NO_FINE'] = "AMENDEDNOFINE";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDFULLFINE"] = 'AMENDED_FULL_FINE'] = "AMENDEDFULLFINE";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDREDUCEDFINE"] = 'AMENDED_REDUCED_FINE'] = "AMENDEDREDUCEDFINE";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDINCREASEDFINE"] = 'AMENDED_INCREASED_FINE'] = "AMENDEDINCREASEDFINE";
        ResolutionStatusEnum[ResolutionStatusEnum["DEFERRED"] = 'DEFERRED'] = "DEFERRED";
        ResolutionStatusEnum[ResolutionStatusEnum["POINTREDUCTION"] = 'POINT_REDUCTION'] = "POINTREDUCTION";
        ResolutionStatusEnum[ResolutionStatusEnum["DIVERSION"] = 'DIVERSION'] = "DIVERSION";
        ResolutionStatusEnum[ResolutionStatusEnum["TRAFFICSCHOOL"] = 'TRAFFIC_SCHOOL'] = "TRAFFICSCHOOL";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDTONMV"] = 'AMENDED_TO_NMV'] = "AMENDEDTONMV";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDTOINFRACTION"] = 'AMENDED_TO_INFRACTION'] = "AMENDEDTOINFRACTION";
        ResolutionStatusEnum[ResolutionStatusEnum["AMENDEDDOWNWITHINCLASS"] = 'AMENDED_DOWN_WITHIN_CLASS'] = "AMENDEDDOWNWITHINCLASS";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDBYUSER"] = 'CANCELLED_BY_USER'] = "CANCELLEDBYUSER";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDBYLAWFIRM"] = 'CANCELLED_BY_LAWFIRM'] = "CANCELLEDBYLAWFIRM";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDNOLAWFIRM"] = 'CANCELLED_NO_LAWFIRM'] = "CANCELLEDNOLAWFIRM";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDNMV"] = 'CANCELLED_NMV'] = "CANCELLEDNMV";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDATTORNEYATFAULT"] = 'CANCELLED_ATTORNEY_AT_FAULT'] = "CANCELLEDATTORNEYATFAULT";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDOVERDUE"] = 'CANCELLED_OVERDUE'] = "CANCELLEDOVERDUE";
        ResolutionStatusEnum[ResolutionStatusEnum["CANCELLEDTOOSHORTNOTICE"] = 'CANCELLED_TOO_SHORT_NOTICE'] = "CANCELLEDTOOSHORTNOTICE";
    })(ResolutionStatusEnum = MarkCaseAsResolvedRequest.ResolutionStatusEnum || (MarkCaseAsResolvedRequest.ResolutionStatusEnum = {}));
})(MarkCaseAsResolvedRequest = exports.MarkCaseAsResolvedRequest || (exports.MarkCaseAsResolvedRequest = {}));