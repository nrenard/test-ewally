const DATE_BASE = '10-07-1997'

export default (dueDateFactor: number): string => {
  const dateBase = new Date(DATE_BASE)

  const dueDate = dateBase.setDate(dateBase.getDate() + dueDateFactor)

  const date = new Date(dueDate)

  const year = date.getFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = date.getDate()

  return `${year}-${month}-${day}`
}
