/**
 * Проверка на наличие элементов в объекте
 * @param {object} obj Объект
 * @returns {boolean} Пустой или нет
 */
export const isObjEmpty = obj => !Object.keys(obj).length
