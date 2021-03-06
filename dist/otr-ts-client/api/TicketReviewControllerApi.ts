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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class TicketReviewControllerApi {
    protected basePath = 'http://otr-backend-service-us-devo.offtherecord.com:443';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary getTicketReviewInfo
     * @param citationId citationId
     */
    public getTicketReviewInfoUsingGET (citationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetTicketReviewResponse> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationId}/ticket-review'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling getTicketReviewInfoUsingGET.');
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
     * @summary persistTicketEvaluation
     * @param request request
     */
    public persistTicketEvaluationUsingPOST (request: models.PersistTicketEvaluationRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
        const localVarPath = this.basePath + '/api/v1/ticket-evaluation';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling persistTicketEvaluationUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
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
     * @summary updateTicketEvaluationRequest
     * @param ticketEvaluationRequestId ticketEvaluationRequestId
     * @param request request
     */
    public updateTicketEvaluationRequestUsingPUT (ticketEvaluationRequestId: number, request: models.TicketReviewRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/ticket-evaluation/{ticketEvaluationRequestId}'
            .replace('{' + 'ticketEvaluationRequestId' + '}', encodeURIComponent(String(ticketEvaluationRequestId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'ticketEvaluationRequestId' is not null or undefined
        if (ticketEvaluationRequestId === null || ticketEvaluationRequestId === undefined) {
            throw new Error('Required parameter ticketEvaluationRequestId was null or undefined when calling updateTicketEvaluationRequestUsingPUT.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateTicketEvaluationRequestUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
