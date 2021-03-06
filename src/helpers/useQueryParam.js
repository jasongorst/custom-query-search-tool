import { useCallback, useMemo } from 'react'
import * as JSURL from 'jsurl'
import { useSearchParams } from 'react-router-dom'


const useQueryParam = (key) => {
  let [searchParams, setSearchParams] = useSearchParams()
  let paramValue = searchParams.get(key)

  let value = useMemo(() => JSURL.parse(paramValue), [paramValue])

  let setValue = useCallback((newValue, options) => {
    let newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set(key, JSURL.stringify(newValue))
    setSearchParams(newSearchParams, options)
  }, [key, searchParams, setSearchParams])

  return [value, setValue]
}

export default useQueryParam
