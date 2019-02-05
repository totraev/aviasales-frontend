import { currencySign } from '../currencies';

describe('Currency sign helper', () => {
  it('Should return dollar sign', () => {
    expect(currencySign('usd')).toBe('$');
  });
});
