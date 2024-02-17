'use client'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useHomeContext } from './home-provider'
import { useItemList } from '@/hooks'
import { COLLECTION_NAME } from '@/constants'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Form from '@/components/Form'

export default function FormBox() {
  const { handleItemsUpdate } = useHomeContext()
  const data = useItemList()

  // Handler for setting data into firebase DB
  const handleSubmit = async expenses => {
    const newItem = {
      title: expenses.title.trim(),
      value: expenses.cost,
    }
    try {
      // console.log(db)
      const docRef = await addDoc(collection(db, COLLECTION_NAME), newItem)
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <Card isBlurred={true} shadow="sm" className="w-full max-w-2xl mx-auto">
      <CardHeader className="justify-center">
        <h1 className="text-center text-3xl font-bold leading-snug">
          Expense tracker
        </h1>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit} />
      </CardBody>
    </Card>
  )
}
