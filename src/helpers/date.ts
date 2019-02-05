import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

export function formatDate(date: string): string {
  return format(date, 'D MMM YYYY, dd', { locale: ru });
}
