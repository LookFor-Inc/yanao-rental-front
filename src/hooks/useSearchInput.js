import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import Button from '@/components/Button'
import Input from '@/components/Input'

/**
 * Hook по обработке формы поиска
 * @param {string} placeholder Подсказка в поле ввода
 * @param {object[]} sourceList Исходный массив из объектов
 * @param {string} field Поле, по которому следует совершать поиск
 * @returns {object} Объект, содержащий в себе компонент формы поиска и результат поиска из списка объектов
 */
export default function useSearchInput(placeholder = '', sourceList, field) {
  const [found, setFound] = useState(sourceList)
  const {register, handleSubmit} = useForm()

  /**
   * Обработка нажатия на enter в форме поиска
   * @param {object} data Значение формы
   * @returns {void}
   */
  const onBound = ({search}) => {
    if (!search.length) {
      setFound(sourceList)
      return
    }
    const inputValue = search.trim().replace(/\s+/g, ' ').toLowerCase()
    const found = sourceList.filter(item => {
      console.log(item[field])
      return item[field].toLowerCase().includes(inputValue)
    })
    console.log(found)
    setFound(found)
  }

  /**
   * Получение компонента формочки для поиска
   * @returns {JSX.Element} Форма поиска
   */
  const getFormComponent = () => {
    return (
      <form
        className='flex space-x-3 w-full'
        onSubmit={handleSubmit(onBound)}
      >
        <Input
          {...register('search')}
          placeholder={placeholder}
          validation={false}
        />
        <Button
          color='primary'
          type='submit'
        >
          Найти
        </Button>
      </form>
    )
  }

  return {
    bind: getFormComponent(),
    found
  }
}
