
export interface clientInfoType {
  clientId : string
  name : string
  webHookUrl : string
  permissions : string
  accounts: accounts[]
  jars: jars[]
}

export interface accounts {
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

export interface jars {
  "id": string
  "sendId": string
  "title": string
  "description": string
  "currencyCode": number
  "balance": number
  "goal": number
}

export const FETCH_CLIENT_INFO = 'FETCH_CLIENT_INFO'
export interface fetchClientInfoType {
  type: typeof FETCH_CLIENT_INFO,
  token: string
}
