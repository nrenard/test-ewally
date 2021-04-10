import { cutText } from '@/shared'

export default (dueDateFactor: string): string => {
  const year = cutText(dueDateFactor, 0, 4)
  const month = cutText(dueDateFactor, 4, 6)
  const day = cutText(dueDateFactor, 6, 8)

  return `${year}-${month}-${day}`
}
