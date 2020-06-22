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

export interface ReverseCaseTransferRequest {
    "refundApplicationFee"?: boolean;
    "stripeChargeId"?: string;
    "stripeTransferId"?: string;
    "transactionType"?: ReverseCaseTransferRequest.TransactionTypeEnum;
}

export namespace ReverseCaseTransferRequest {
    export enum TransactionTypeEnum {
        CREDIT = <any> 'CREDIT',
        DEBIT = <any> 'DEBIT',
        PAYOUT = <any> 'PAYOUT',
        CHARGEBACK = <any> 'CHARGEBACK',
        PENDING = <any> 'PENDING',
        CANCELLATION = <any> 'CANCELLATION',
        REFUND = <any> 'REFUND',
        ADJUSTMENT = <any> 'ADJUSTMENT',
        FEE = <any> 'FEE'
    }
}
