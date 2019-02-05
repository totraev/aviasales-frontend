const currenciesMap = {
  eur: '€',
  rub: '₽',
  usd: '$',
};

export function currencySign(currency: 'eur' | 'rub' | 'usd'): string {
  return currenciesMap[currency];
}
