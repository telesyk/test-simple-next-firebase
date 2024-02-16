'use client'

import { v4 as uuidv4 } from 'uuid'
import { useHomeContext } from './home-provider'
import { useItemList } from '@/hooks'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Form from '@/components/Form'

export default function FormBox() {
  const { handleItemsUpdate } = useHomeContext()
  const data = useItemList()

  const handleSubmit = expenses => {
    handleItemsUpdate([
      ...data,
      {
        id: uuidv4(),
        title: expenses.title,
        value: expenses.cost,
      },
    ])
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
