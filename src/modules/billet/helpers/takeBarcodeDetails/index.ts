import { BILLET_TYPES } from '@/modules/billet/constants'

import bankBond from './bankBond'
// import dealershipPayment from './dealershipPayment'

const MAP_FUNCTIONS = new Map()

MAP_FUNCTIONS.set(BILLET_TYPES.BANK_BOND, bankBond)
// MAP_FUNCTIONS.set(BILLET_TYPES.DEALERSHIP_PAYMENT, dealershipPayment)

export default (type: keyof typeof BILLET_TYPES) => MAP_FUNCTIONS.get(type)
