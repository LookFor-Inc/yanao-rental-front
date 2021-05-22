import {days} from '@/data/dayEnRu'

/**
 * Форматирование графика работы
 * @param {string} fromDay День начала
 * @param {string} fromTime Время начала
 * @param {string} toDay День окончания
 * @param {string} toTime Время окончания
 * @returns {string} Отформатированный график
 */
export const convertToWorkTimeFormat = (fromDay, fromTime, toDay, toTime) => {
  const fromDayRu = convertDayFromEnToRuShort(fromDay)
  const toDayRu = convertDayFromEnToRuShort(toDay)
  return `${fromDayRu}-${toDayRu} ${fromTime}-${toTime}`
}

const convertDayFromEnToRuShort = enDay => days.find(({en}) => en === enDay).ruShort
