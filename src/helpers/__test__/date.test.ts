import { formatDate } from '../date'

describe('', () => {
  it('Should return formated date', () => {
    expect(formatDate('07.01.13')).toBe('7 фев 2013, Чт')
  })
})
