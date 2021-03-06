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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class CasePaymentPlanControllerApi {
    protected basePath = 'https://otr-backend-service-us-devo.offtherecord.com:443';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary generateCasePaymentPlan
     * @param caseId caseId
     * @param paymentPlanId paymentPlanId
     */
    public generateCasePaymentPlanUsingGET (caseId: string, paymentPlanId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCaseLineItemsResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/payment-plans/{paymentPlanId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'paymentPlanId' + '}', encodeURIComponent(String(paymentPlanId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling generateCasePaymentPlanUsingGET.');
        }

        // verify required parameter 'paymentPlanId' is not null or undefined
        if (paymentPlanId === null || paymentPlanId === undefined) {
            throw new Error('Required parameter paymentPlanId was null or undefined when calling generateCasePaymentPlanUsingGET.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getAvailablePaymentPlans
     * @param lawfirmId lawfirmId
     * @param legalFeeInCents legalFeeInCents
     * @param state state
     */
    public getAvailablePaymentPlansUsingPOST (lawfirmId: string, legalFeeInCents: string, state: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AvailablePaymentPlanResponse> {
        const localVarPath = this.basePath + '/api/v1/payment-plans/{lawfirmId}/case-payment'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling getAvailablePaymentPlansUsingPOST.');
        }

        // verify required parameter 'legalFeeInCents' is not null or undefined
        if (legalFeeInCents === null || legalFeeInCents === undefined) {
            throw new Error('Required parameter legalFeeInCents was null or undefined when calling getAvailablePaymentPlansUsingPOST.');
        }

        // verify required parameter 'state' is not null or undefined
        if (state === null || state === undefined) {
            throw new Error('Required parameter state was null or undefined when calling getAvailablePaymentPlansUsingPOST.');
        }

        if (legalFeeInCents !== undefined) {
            queryParameters['legalFeeInCents'] = legalFeeInCents;
        }

        if (state !== undefined) {
            queryParameters['state'] = state;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
