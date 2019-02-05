const months = [
  'янв',
  'фев',
  'мар',
  'aпр',
  'май',
  'июн',
  'июл',
  'авг',
  'сент',
  'окт',
  'нояб',
  'дек',
]
const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

export function formatDate(dateStr: string): string {
  const [day, month, year] = dateStr
    .split('.')
    .map(value => parseInt(value, 10))
  const date = new Date(2000 + year, month, day)

  return `${day} ${months[date.getMonth()]} ${date.getFullYear()}, ${
    weekDays[date.getDay()]
  }`
}
