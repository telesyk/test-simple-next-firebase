'use client'

import { useHomeContext } from './home-provider'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Form from '@/components/Form'

export default function FormBox() {
  const { handleAddItems } = useHomeContext()

  const handleSubmit = expenses => {
    handleAddItems({
      title: expenses.title.trim(),
      value: expenses.cost,
    })
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
