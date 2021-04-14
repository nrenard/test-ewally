import { cutText } from '@/shared'

const MULTIPLE_ARRAY = [1, 2]

const calculateDv = (digits: string) => {
  let sum = 0

  for (let i = 0; i < digits.length; i += 1) {
    const digit = Number(digits[i])
    const multiple = MULTIPLE_ARRAY[i % 2 === 0 ? 1 : 0]

    const result = digit * multiple

    if (result > 9) {
      String(result).split('').forEach(item => {
        sum += Number(item)
      })
    } else {
      sum += result
    }
  }

  return 10 - sum % 10
}

export default (digitableLine: string) => {
  const dv = digitableLine[3]

  if (dv === '0' || dv === '1') {
    const barcodeNoDv = `${cutText(digitableLine, 0, 3)}${cutText(digitableLine, 4, 44)}`

    const sumDigits = String(calculateDv(barcodeNoDv))

    if (dv === sumDigits) {
      return cutText(barcodeNoDv, 0, 44)
    }
  }

  return null
}
