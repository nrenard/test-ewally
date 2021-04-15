import { cutText } from '@/shared'

const MULTIPLE_ARRAY = [2, 3, 4, 5, 6, 7, 8, 9]

const BASE_MULTIPLE = 11

const MAP_DV = {
  0: 1,
  10: 1,
  11: 1
}

const calculateDv = (digits: string) => {
  let sum = 0
  let multipleIndex = 0

  for (let i = digits.length - 1; i > -1; i -= 1, multipleIndex += 1) {
    const digit = Number(digits[i])
    const multiple = MULTIPLE_ARRAY[multipleIndex]
    const result = digit * multiple
    sum += result

    if (multipleIndex === 7) multipleIndex = -1
  }

  const sumRest = sum % BASE_MULTIPLE
  const dv = BASE_MULTIPLE - sumRest

  return MAP_DV[dv] || dv
}

export default (digitableLine: string) => {
  const digitableLineFieldOneNoDv = cutText(digitableLine, 0, 9)

  const digitableLineFieldTwoNoDv = cutText(digitableLine, 9, 19)

  const digitableLineFieldThreeNoDv = cutText(digitableLine, 20, 30)

  const barcodeInit = cutText(digitableLineFieldOneNoDv, 0, 4)
  const winningFactor = cutText(digitableLine, 31, 36)
  const amount = cutText(digitableLine, 37, 47)

  let freeField = cutText(digitableLineFieldOneNoDv, 4, 9)
  freeField += cutText(digitableLineFieldTwoNoDv, 0, 11)
  freeField += cutText(digitableLineFieldThreeNoDv, 0, 11)

  const barcode = `${barcodeInit}${winningFactor}${amount}${freeField}`

  const bacordNoDv = `${cutText(barcode, 0, 4)}${cutText(barcode, 5, 44)}`

  const dv = cutText(barcode, 4, 5)
  const dvCalculate = calculateDv(bacordNoDv)

  if (Number(dv) !== dvCalculate) return null

  return barcode
}
