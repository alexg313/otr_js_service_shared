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
var ReferralResponse;
(function (ReferralResponse) {
    var ReferralCreditStatusEnum;
    (function (ReferralCreditStatusEnum) {
        ReferralCreditStatusEnum[ReferralCreditStatusEnum["NOTIFIED"] = 'NOTIFIED'] = "NOTIFIED";
        ReferralCreditStatusEnum[ReferralCreditStatusEnum["SAVED"] = 'SAVED'] = "SAVED";
        ReferralCreditStatusEnum[ReferralCreditStatusEnum["APPLIED"] = 'APPLIED'] = "APPLIED";
        ReferralCreditStatusEnum[ReferralCreditStatusEnum["CONFIRMED"] = 'CONFIRMED'] = "CONFIRMED";
        ReferralCreditStatusEnum[ReferralCreditStatusEnum["CASECANCELLED"] = 'CASE_CANCELLED'] = "CASECANCELLED";
        ReferralCreditStatusEnum[ReferralCreditStatusEnum["SUPERSEDED"] = 'SUPERSEDED'] = "SUPERSEDED";
    })(ReferralCreditStatusEnum = ReferralResponse.ReferralCreditStatusEnum || (ReferralResponse.ReferralCreditStatusEnum = {}));
    var ReferralCreditTypeEnum;
    (function (ReferralCreditTypeEnum) {
        ReferralCreditTypeEnum[ReferralCreditTypeEnum["CENTSVALUE"] = 'CENTS_VALUE'] = "CENTSVALUE";
        ReferralCreditTypeEnum[ReferralCreditTypeEnum["PERCENTAGEDISCOUNT"] = 'PERCENTAGE_DISCOUNT'] = "PERCENTAGEDISCOUNT";
        ReferralCreditTypeEnum[ReferralCreditTypeEnum["NOCREDIT"] = 'NO_CREDIT'] = "NOCREDIT";
    })(ReferralCreditTypeEnum = ReferralResponse.ReferralCreditTypeEnum || (ReferralResponse.ReferralCreditTypeEnum = {}));
    var ReferralPaymentStatusEnum;
    (function (ReferralPaymentStatusEnum) {
        ReferralPaymentStatusEnum[ReferralPaymentStatusEnum["NONE"] = 'NONE'] = "NONE";
        ReferralPaymentStatusEnum[ReferralPaymentStatusEnum["PENDINGCASERESOLUTION"] = 'PENDING_CASE_RESOLUTION'] = "PENDINGCASERESOLUTION";
        ReferralPaymentStatusEnum[ReferralPaymentStatusEnum["PAIDOUT"] = 'PAID_OUT'] = "PAIDOUT";
        ReferralPaymentStatusEnum[ReferralPaymentStatusEnum["ERROR"] = 'ERROR'] = "ERROR";
    })(ReferralPaymentStatusEnum = ReferralResponse.ReferralPaymentStatusEnum || (ReferralResponse.ReferralPaymentStatusEnum = {}));
    var ReferralSourceTypeEnum;
    (function (ReferralSourceTypeEnum) {
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["GOOGLESEARCH"] = 'GOOGLE_SEARCH'] = "GOOGLESEARCH";
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["FACEBOOK"] = 'FACEBOOK'] = "FACEBOOK";
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["RADIO"] = 'RADIO'] = "RADIO";
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["FRIENDORFAMILY"] = 'FRIEND_OR_FAMILY'] = "FRIENDORFAMILY";
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["OTHER"] = 'OTHER'] = "OTHER";
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["CHECKOUTCODE"] = 'CHECKOUT_CODE'] = "CHECKOUTCODE";
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["DMVORG"] = 'DMV_ORG'] = "DMVORG";
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["REDDIT"] = 'REDDIT'] = "REDDIT";
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["DWA"] = 'DWA'] = "DWA";
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["YOUTUBEAD"] = 'YOUTUBE_AD'] = "YOUTUBEAD";
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["DMVCOM"] = 'DMV_COM'] = "DMVCOM";
        ReferralSourceTypeEnum[ReferralSourceTypeEnum["VINWIKI"] = 'VINWIKI'] = "VINWIKI";
    })(ReferralSourceTypeEnum = ReferralResponse.ReferralSourceTypeEnum || (ReferralResponse.ReferralSourceTypeEnum = {}));
})(ReferralResponse = exports.ReferralResponse || (exports.ReferralResponse = {}));