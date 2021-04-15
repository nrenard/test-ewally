export interface IDetails {
  barCode?: string
  amount: string
  expirationDate: string
}

export type IReturnValid = string | null

export type IReturnHandle = IDetails | null

export interface IValidAndReturnDetails {
  handle: (code: string) => IReturnHandle
}
