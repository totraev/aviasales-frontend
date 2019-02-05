import { priceWithSpaces } from '../currencies'

describe('Currency helpers', () => {
  it('Should return formated price', () => {
    expect(priceWithSpaces(10000)).toBe('10 000')
  })

  it('Should not formate price', () => {
    expect(priceWithSpaces(100)).toBe('100')
  })
})
