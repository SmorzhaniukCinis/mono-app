
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

export interface transactionType {
  "id": string
  "time": number
  "description": string
  "mcc": number
  "originalMcc": number
  "hold": false,
  "amount": number
  "operationAmount": number
  "currencyCode": number
  "commissionRate": number
  "cashbackAmount": number
  "balance": number
  "comment": string
  "receiptId": string
  "invoiceId": string
  "counterEdrpou": string
  "counterIban": string
  "counterName": string
}

export const CHECK_CLIENT_TOKEN = 'CHECK_CLIENT_TOKEN'
export interface checkClientTokenType {
  type: typeof CHECK_CLIENT_TOKEN,
  token: string
}

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS'
export interface fetchTransactionsType {
  type: typeof FETCH_TRANSACTIONS,
  account: string
  from: string
  to?: string
}


export const FETCH_CLIENT_INFO = 'FETCH_CLIENT_INFO'
export interface fetchClientInfoType {
  type: typeof FETCH_CLIENT_INFO
}
