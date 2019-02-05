const messages = [
  'БЕЗ ПЕРЕСАДОК',
  '1 ПЕРЕСАДКА',
  '2 ПЕРЕСАДКИ',
  '3 ПЕРЕСАДКИ',
];

export function stopsMessage(value: number): string {
  return messages[value] !== undefined
    ? messages[value]
    : messages[0];
}
