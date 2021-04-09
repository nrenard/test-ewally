const MAX_LENGTH = 44

export default (code: string) => {
  if (isNaN(Number(code)) || code.length !== MAX_LENGTH) return false
  return true
}
