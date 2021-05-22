import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import SearchInputProvider from '@/pages/Rental/components/SearchInputProvider'
import {fetchEquipmentTypesAndRentals} from '@/store/EquipmentAndRentals/actions'

/**
 * HOK для страницы со списком всех прокатов
 * @param {React.Component|function} PageComponent Компонент страницы
 * @returns {React.Component} Компонент с расширенной функциональностью
 */
function withRentalsPage(PageComponent) {
  /**
   * Компонент-обёртка списка всех прокатов
   * @param {function} fetchAllGroups Функция для получения списка всех групп
   * @param {object[]} rentalsList Список прокатов
   * @returns {JSX.Element} Компонент
   */
  const RentalsWrapper = ({fetchEquipmentTypesAndRentals, rentalsList}) => {
    useEffect(() => {
      fetchEquipmentTypesAndRentals()
    }, [])

    return (
      <SearchInputProvider items={rentalsList}>
        <PageComponent />
      </SearchInputProvider>
    )
  }

  RentalsWrapper.propTypes = {
    fetchEquipmentTypesAndRentals: PropTypes.func,
    rentalsList: PropTypes.arrayOf(PropTypes.object)
  }

  /**
   * Получение состояния всех прокатов
   * @param {object} state Состояние
   * @returns {object} Значения состояний
   */
  const rentalsPageState = state => {
    return {
      rentalsList: state.equipmentAndRentals.data.rentals
    }
  }

  /**
   * Получение списка всех прокатов
   * @param {function} dispatch Запрос
   * @returns {object} Функция установки
   */
  const rentalsWrapperDispatch = dispatch => {
    return {
      fetchEquipmentTypesAndRentals: () => dispatch(fetchEquipmentTypesAndRentals())
    }
  }

  return connect(rentalsPageState, rentalsWrapperDispatch)(RentalsWrapper)
}

export default withRentalsPage
