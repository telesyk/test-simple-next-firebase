import { useState, useEffect } from 'react'
import { useHomeContext } from './components/home-provider'

export function useItemList() {
  const [state, setState] = useState([])
  const { data } = useHomeContext()

  useEffect(() => {
    setState([...data])
  }, [data])

  return state
}
