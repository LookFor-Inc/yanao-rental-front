import React, {createContext, useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const SearchInputResultContext = createContext(null)

/**
 * Provider результата поиска
 * @param {element} children Дочерние элементы
 * @param {object[]} items Исходный список
 * @returns {JSX.Element} Provider результата поиска
 */
const SearchInputProvider = ({children, items}) => {
  const [result, setResult] = useState([])
  useEffect(() => {
    setResult(items)
  }, [items])

  return (
    <SearchInputResultContext.Provider value={{result, items, setResult}}>
      {children}
    </SearchInputResultContext.Provider>
  )
}

SearchInputProvider.propTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.object)
}

/**
 * Hook для управления результатом поиска
 * @returns {Context} Контекст результата поиска
 */
export function useSearchInputProvider() {
  return useContext(SearchInputResultContext)
}

export default SearchInputProvider
