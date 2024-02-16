'use client'

import { useEffect, useState } from 'react'
import { useHomeContext } from './home-provider'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Form from '@/components/Form'

export default function FormBox() {
  const { data, handleStateUpdate } = useHomeContext()
  const [state, setState] = useState(data)

  useEffect(() => {
    handleStateUpdate(state)
  }, [state])

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
