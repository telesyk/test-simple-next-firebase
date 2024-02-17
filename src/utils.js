import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase.config'
import { COLLECTION_NAME } from './constants'

export const getFirebaseData = async () => {
  const queryCollection = collection(db, COLLECTION_NAME)
  const querySnapshot = await getDocs(queryCollection)
  const result = querySnapshot.docs.map(doc => doc.data())
  return result
}

export const getTotalAmount = list => {
  if (!list) return 0
  let total = 0
  list.map(item => {
    total += Number(item.value)
  })

  return total.toFixed(2)
}
