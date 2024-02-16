'use client'
import { createContext, useContext, useEffect, useState } from 'react'

export const HomeContext = createContext([])

export default function HomeProvider({ children, data }) {
  const [state, setState] = useState([])

  useEffect(() => {
    setState([...data])
  }, [data])

  const handleItemsUpdate = updatedData => setState([...updatedData])

  return (
    <HomeContext.Provider value={{ data: state, handleItemsUpdate }}>
      {children}
    </HomeContext.Provider>
  )
}

export const useHomeContext = () => useContext(HomeContext)
