const currenciesMap = {
  eur: '€',
  rub: '₽',
  usd: '$',
};

export function currencySign(currency: 'eur' | 'rub' | 'usd'): string {
  return currenciesMap[currency];
}

export function priceWithSpaces(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
