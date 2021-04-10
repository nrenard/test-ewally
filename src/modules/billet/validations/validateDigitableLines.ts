const MAX_LENGTH = 47

export default (code: string) => {
  if (isNaN(Number(code)) || code.length !== MAX_LENGTH) return false
  return true
}
