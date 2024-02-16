'use client'

import { Card, CardBody, CardHeader } from '@nextui-org/react'
import List from '@/components/List'
import Form from '@/components/Form'
import { useState } from 'react'

export default function HomeContainer({ data }) {
  const [state, setState] = useState(data)
  const handleSubmit = data => {
    setState(prevState => [
      ...prevState,
      {
        title: data.title,
        value: data.cost,
      },
    ])
  }
  return (
    <>
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
      <div className="w-full max-w-2xl mx-auto">
        <List items={state} />
      </div>
    </>
  )
}
