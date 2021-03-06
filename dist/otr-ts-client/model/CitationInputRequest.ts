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

export interface CitationInputRequest {
    "address"?: models.AddressDomain;
    "cdlStatus"?: CitationInputRequest.CdlStatusEnum;
    "citationIssueDateUTC"?: models.Timestamp;
    "clientEmailAddress"?: string;
    "clientFirstName"?: string;
    "court"?: models.CourtDomain;
    "documentUrlToConvert"?: string;
    "fineAmount"?: number;
    "involvesAccident"?: boolean;
    "isDismissedFromContactList"?: boolean;
    "isPastDue"?: boolean;
    "state"?: CitationInputRequest.StateEnum;
    "ticketNumber"?: string;
    "userId"?: number;
    "violationCount"?: number;
    "violations"?: Array<models.TrafficViolationInputRequest>;
}

export namespace CitationInputRequest {
    export enum CdlStatusEnum {
        NOCDL = <any> 'NO_CDL',
        CDLINPERSONALVEHICLE = <any> 'CDL_IN_PERSONAL_VEHICLE',
        CDLINCOMMERCIALVEHICLE = <any> 'CDL_IN_COMMERCIAL_VEHICLE'
    }
    export enum StateEnum {
        ALNameAlabamaAbbreviationALSuccessRate95TimezoneAmericaChicago = <any> 'USState.AL(name=Alabama, abbreviation=AL, successRate=95, timezone=America/Chicago)',
        AKNameAlaskaAbbreviationAKSuccessRate95TimezoneAmericaAnchorage = <any> 'USState.AK(name=Alaska, abbreviation=AK, successRate=95, timezone=America/Anchorage)',
        AZNameArizonaAbbreviationAZSuccessRate85TimezoneAmericaDenver = <any> 'USState.AZ(name=Arizona, abbreviation=AZ, successRate=85, timezone=America/Denver)',
        ARNameArkansasAbbreviationARSuccessRate95TimezoneAmericaChicago = <any> 'USState.AR(name=Arkansas, abbreviation=AR, successRate=95, timezone=America/Chicago)',
        CANameCaliforniaAbbreviationCASuccessRate93TimezoneAmericaLosAngeles = <any> 'USState.CA(name=California, abbreviation=CA, successRate=93, timezone=America/Los_Angeles)',
        CONameColoradoAbbreviationCOSuccessRate90TimezoneAmericaDenver = <any> 'USState.CO(name=Colorado, abbreviation=CO, successRate=90, timezone=America/Denver)',
        CTNameConnecticutAbbreviationCTSuccessRate95TimezoneAmericaNewYork = <any> 'USState.CT(name=Connecticut, abbreviation=CT, successRate=95, timezone=America/New_York)',
        DENameDelawareAbbreviationDESuccessRate95TimezoneAmericaNewYork = <any> 'USState.DE(name=Delaware, abbreviation=DE, successRate=95, timezone=America/New_York)',
        DCNameDistrictOfColumbiaAbbreviationDCSuccessRate95TimezoneAmericaNewYork = <any> 'USState.DC(name=District of Columbia, abbreviation=DC, successRate=95, timezone=America/New_York)',
        FLNameFloridaAbbreviationFLSuccessRate90TimezoneAmericaNewYork = <any> 'USState.FL(name=Florida, abbreviation=FL, successRate=90, timezone=America/New_York)',
        GANameGeorgiaAbbreviationGASuccessRate85TimezoneAmericaNewYork = <any> 'USState.GA(name=Georgia, abbreviation=GA, successRate=85, timezone=America/New_York)',
        HINameHawaiiAbbreviationHISuccessRate90TimezonePacificHonolulu = <any> 'USState.HI(name=Hawaii, abbreviation=HI, successRate=90, timezone=Pacific/Honolulu)',
        IDNameIdahoAbbreviationIDSuccessRate85TimezoneAmericaDenver = <any> 'USState.ID(name=Idaho, abbreviation=ID, successRate=85, timezone=America/Denver)',
        ILNameIllinoisAbbreviationILSuccessRate85TimezoneAmericaChicago = <any> 'USState.IL(name=Illinois, abbreviation=IL, successRate=85, timezone=America/Chicago)',
        INNameIndianaAbbreviationINSuccessRate95TimezoneAmericaChicago = <any> 'USState.IN(name=Indiana, abbreviation=IN, successRate=95, timezone=America/Chicago)',
        IANameIowaAbbreviationIASuccessRate95TimezoneAmericaChicago = <any> 'USState.IA(name=Iowa, abbreviation=IA, successRate=95, timezone=America/Chicago)',
        KSNameKansasAbbreviationKSSuccessRate95TimezoneAmericaChicago = <any> 'USState.KS(name=Kansas, abbreviation=KS, successRate=95, timezone=America/Chicago)',
        KYNameKentuckyAbbreviationKYSuccessRate95TimezoneAmericaNewYork = <any> 'USState.KY(name=Kentucky, abbreviation=KY, successRate=95, timezone=America/New_York)',
        LANameLouisianaAbbreviationLASuccessRate95TimezoneAmericaChicago = <any> 'USState.LA(name=Louisiana, abbreviation=LA, successRate=95, timezone=America/Chicago)',
        MENameMaineAbbreviationMESuccessRate95TimezoneAmericaChicago = <any> 'USState.ME(name=Maine, abbreviation=ME, successRate=95, timezone=America/Chicago)',
        MDNameMarylandAbbreviationMDSuccessRate95TimezoneAmericaNewYork = <any> 'USState.MD(name=Maryland, abbreviation=MD, successRate=95, timezone=America/New_York)',
        MANameMassachusettsAbbreviationMASuccessRate95TimezoneAmericaNewYork = <any> 'USState.MA(name=Massachusetts, abbreviation=MA, successRate=95, timezone=America/New_York)',
        MINameMichiganAbbreviationMISuccessRate95TimezoneAmericaNewYork = <any> 'USState.MI(name=Michigan, abbreviation=MI, successRate=95, timezone=America/New_York)',
        MNNameMinnesotaAbbreviationMNSuccessRate95TimezoneAmericaChicago = <any> 'USState.MN(name=Minnesota, abbreviation=MN, successRate=95, timezone=America/Chicago)',
        MSNameMississippiAbbreviationMSSuccessRate95TimezoneAmericaChicago = <any> 'USState.MS(name=Mississippi, abbreviation=MS, successRate=95, timezone=America/Chicago)',
        MONameMissouriAbbreviationMOSuccessRate90TimezoneAmericaChicago = <any> 'USState.MO(name=Missouri, abbreviation=MO, successRate=90, timezone=America/Chicago)',
        MTNameMontanaAbbreviationMTSuccessRate95TimezoneAmericaDenver = <any> 'USState.MT(name=Montana, abbreviation=MT, successRate=95, timezone=America/Denver)',
        NENameNebraskaAbbreviationNESuccessRate95TimezoneAmericaChicago = <any> 'USState.NE(name=Nebraska, abbreviation=NE, successRate=95, timezone=America/Chicago)',
        NVNameNevadaAbbreviationNVSuccessRate95TimezoneAmericaLosAngeles = <any> 'USState.NV(name=Nevada, abbreviation=NV, successRate=95, timezone=America/Los_Angeles)',
        NHNameNewHampshireAbbreviationNHSuccessRate95TimezoneAmericaNewYork = <any> 'USState.NH(name=New Hampshire, abbreviation=NH, successRate=95, timezone=America/New_York)',
        NJNameNewJerseyAbbreviationNJSuccessRate90TimezoneAmericaNewYork = <any> 'USState.NJ(name=New Jersey, abbreviation=NJ, successRate=90, timezone=America/New_York)',
        NMNameNewMexicoAbbreviationNMSuccessRate95TimezoneAmericaDenver = <any> 'USState.NM(name=New Mexico, abbreviation=NM, successRate=95, timezone=America/Denver)',
        NYNameNewYorkAbbreviationNYSuccessRate95TimezoneAmericaNewYork = <any> 'USState.NY(name=New York, abbreviation=NY, successRate=95, timezone=America/New_York)',
        NCNameNorthCarolinaAbbreviationNCSuccessRate95TimezoneAmericaNewYork = <any> 'USState.NC(name=North Carolina, abbreviation=NC, successRate=95, timezone=America/New_York)',
        NDNameNorthDakotaAbbreviationNDSuccessRate95TimezoneAmericaChicago = <any> 'USState.ND(name=North Dakota, abbreviation=ND, successRate=95, timezone=America/Chicago)',
        OHNameOhioAbbreviationOHSuccessRate80TimezoneAmericaNewYork = <any> 'USState.OH(name=Ohio, abbreviation=OH, successRate=80, timezone=America/New_York)',
        OKNameOklahomaAbbreviationOKSuccessRate96TimezoneAmericaChicago = <any> 'USState.OK(name=Oklahoma, abbreviation=OK, successRate=96, timezone=America/Chicago)',
        ORNameOregonAbbreviationORSuccessRate88TimezoneAmericaLosAngeles = <any> 'USState.OR(name=Oregon, abbreviation=OR, successRate=88, timezone=America/Los_Angeles)',
        PANamePennsylvaniaAbbreviationPASuccessRate90TimezoneAmericaNewYork = <any> 'USState.PA(name=Pennsylvania, abbreviation=PA, successRate=90, timezone=America/New_York)',
        RINameRhodeIslandAbbreviationRISuccessRate95TimezoneAmericaNewYork = <any> 'USState.RI(name=Rhode Island, abbreviation=RI, successRate=95, timezone=America/New_York)',
        SCNameSouthCarolinaAbbreviationSCSuccessRate95TimezoneAmericaNewYork = <any> 'USState.SC(name=South Carolina, abbreviation=SC, successRate=95, timezone=America/New_York)',
        SDNameSouthDakotaAbbreviationSDSuccessRate95TimezoneAmericaChicago = <any> 'USState.SD(name=South Dakota, abbreviation=SD, successRate=95, timezone=America/Chicago)',
        TNNameTennesseeAbbreviationTNSuccessRate95TimezoneAmericaChicago = <any> 'USState.TN(name=Tennessee, abbreviation=TN, successRate=95, timezone=America/Chicago)',
        TXNameTexasAbbreviationTXSuccessRate85TimezoneAmericaChicago = <any> 'USState.TX(name=Texas, abbreviation=TX, successRate=85, timezone=America/Chicago)',
        UTNameUtahAbbreviationUTSuccessRate90TimezoneAmericaDenver = <any> 'USState.UT(name=Utah, abbreviation=UT, successRate=90, timezone=America/Denver)',
        VTNameVermontAbbreviationVTSuccessRate89TimezoneAmericaNewYork = <any> 'USState.VT(name=Vermont, abbreviation=VT, successRate=89, timezone=America/New_York)',
        VANameVirginiaAbbreviationVASuccessRate90TimezoneAmericaNewYork = <any> 'USState.VA(name=Virginia, abbreviation=VA, successRate=90, timezone=America/New_York)',
        WANameWashingtonAbbreviationWASuccessRate97TimezoneAmericaLosAngeles = <any> 'USState.WA(name=Washington, abbreviation=WA, successRate=97, timezone=America/Los_Angeles)',
        WVNameWestVirginiaAbbreviationWVSuccessRate93TimezoneAmericaNewYork = <any> 'USState.WV(name=West Virginia, abbreviation=WV, successRate=93, timezone=America/New_York)',
        WINameWisconsinAbbreviationWISuccessRate95TimezoneAmericaChicago = <any> 'USState.WI(name=Wisconsin, abbreviation=WI, successRate=95, timezone=America/Chicago)',
        WYNameWyomingAbbreviationWYSuccessRate95TimezoneAmericaDenver = <any> 'USState.WY(name=Wyoming, abbreviation=WY, successRate=95, timezone=America/Denver)'
    }
}
