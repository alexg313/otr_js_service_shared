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

export class ConversationControllerApi {
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
     * @summary addMessageToConversation
     * @param caseId caseId
     * @param request request
     */
    public addMessageToConversationUsingPOST (caseId: string, request: models.PostNewCaseMessageRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AddCaseMessageResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/conversation'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling addMessageToConversationUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addMessageToConversationUsingPOST.');
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
     * @summary deleteMessage
     * @param caseId caseId
     * @param messageId messageId
     */
    public deleteMessageUsingDELETE (caseId: string, messageId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/conversation/{messageId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'messageId' + '}', encodeURIComponent(String(messageId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling deleteMessageUsingDELETE.');
        }

        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new Error('Required parameter messageId was null or undefined when calling deleteMessageUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
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
     * @summary getConversation
     * @param caseId caseId
     * @param page page
     * @param length length
     */
    public getConversationUsingGET (caseId: string, page?: number, length?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCaseMessagesResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/conversation'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getConversationUsingGET.');
        }

        if (page !== undefined) {
            queryParameters['page'] = page;
        }

        if (length !== undefined) {
            queryParameters['length'] = length;
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
     * @summary getMessage
     * @param caseId caseId
     * @param messageId messageId
     */
    public getMessageUsingGET (caseId: string, messageId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCaseMessagesResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/conversation/{messageId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'messageId' + '}', encodeURIComponent(String(messageId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getMessageUsingGET.');
        }

        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new Error('Required parameter messageId was null or undefined when calling getMessageUsingGET.');
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
}