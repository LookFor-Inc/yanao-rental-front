import {useHistory, useLocation} from 'react-router-dom'

/**
 * Hook, который основан на useLocation
 * для синтаксического анализа строка запроса
 * @returns {URLSearchParams} Данные Query
 */
export default function useQuery() {
  const location = useLocation()
  const history = useHistory()

  const urlSearchParams = new URLSearchParams(location.search)

  urlSearchParams.remove = param => {
    if (urlSearchParams.has(param)) {
      const value = urlSearchParams.get(param)
      urlSearchParams.delete(param)
      history.replace({
        search: urlSearchParams.toString()
      })
      return value
    }
  }

  return urlSearchParams
}
