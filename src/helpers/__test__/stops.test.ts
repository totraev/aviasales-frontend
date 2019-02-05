import { stopsMessage } from '../stops';

describe('Stops helper func', () => {
  it('Should return 0 stops message', () => {
    expect(stopsMessage(0)).toBe('БЕЗ ПЕРЕСАДОК');
  });

  it('Should return 1 stop message', () => {
    expect(stopsMessage(1)).toBe('1 ПЕРЕСАДКА');
  });

  it('Should return 2 stops message', () => {
    expect(stopsMessage(2)).toBe('2 ПЕРЕСАДКИ');
  });
});
