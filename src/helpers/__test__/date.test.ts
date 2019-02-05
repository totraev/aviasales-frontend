import { formatDate } from '../date';

describe('', () => {
  it('Should return formated date', () => {
    expect(formatDate('1991.01.07')).toBe('7 янв. 1991, пн');
  });
});
