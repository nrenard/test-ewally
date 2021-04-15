import { BILLET_TYPES } from '@/modules/billet/constants'

export interface IDetails {
  barCode?: string
  amount: string
  expirationDate: string
}

export type IReturnValid = {
  type: keyof typeof BILLET_TYPES
  barcode: string
} | null

export type IReturnHandle = IDetails | null

export interface IValidAndReturnDetails {
  handle: () => IReturnHandle
}
