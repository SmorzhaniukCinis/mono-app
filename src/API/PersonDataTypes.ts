
export interface clientInfoType {
  clientId : string
  name : string
  webHookUrl : string
  permissions : string
  accounts: accountType[]
  jars: jarType[]
}

export interface accountType {
  "id": string,
  "sendId": string
  "balance": number
  "creditLimit": number
  "type": string
  "currencyCode": number
  "cashbackType": string
  "maskedPan": string[]
  "iban": string
}

export interface jarType {
  "id": string
  "sendId": string
  "title": string
  "description": string
  "currencyCode": number
  "balance": number
  "goal": number
}

export const CHECK_CLIENT_TOKEN = 'CHECK_CLIENT_TOKEN'
export interface checkClientTokenType {
  type: typeof CHECK_CLIENT_TOKEN,
  token: string
}

export const FETCH_CLIENT_INFO = 'FETCH_CLIENT_INFO'
export interface fetchClientInfoType {
  type: typeof FETCH_CLIENT_INFO
}
