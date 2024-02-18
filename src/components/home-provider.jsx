'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { COLLECTION_NAME } from '@/constants'
import { getFirebaseData } from '@/utils'

export const HomeContext = createContext([])

export default function HomeProvider({ children, data }) {
  const [state, setState] = useState([])

  useEffect(() => {
    setState([...data])
  }, [data])

  const handleAddItems = async newItems => {
    try {
      await addDoc(collection(db, COLLECTION_NAME), newItems)
      const updatedData = await getFirebaseData()
      setState([...updatedData])
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }

  const handleRemoveItems = async id => {
    await deleteDoc(doc(db, COLLECTION_NAME, id))
    const updatedData = await getFirebaseData()
    setState([...updatedData])
  }

  return (
    <HomeContext.Provider
      value={{
        data: state,
        handleAddItems,
        handleRemoveItems,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export const useHomeContext = () => useContext(HomeContext)
