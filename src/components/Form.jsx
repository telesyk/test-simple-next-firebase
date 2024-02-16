'use client'
import { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { FaPlus, FaDollarSign } from 'react-icons/fa6'

export default function Form({ onSubmit }) {
  const [state, setState] = useState({ title: '', cost: '' })

  const handleValueChange = (value, name) => {
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (state.title && state.title !== '' && state.cost && state.cost > 0) {
      onSubmit(state)
      setState({
        title: '',
        cost: '',
      })
    } else {
      alert('Some data is empty')
    }
  }
  return (
    <form className="bg-sky-900/20 rounded-lg p-3" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-auto basis-3/5">
          <Input
            variant="bordered"
            size="sm"
            type="text"
            isRequired
            placeholder="Title"
            color="primary"
            name="title"
            onValueChange={e => handleValueChange(e, 'title')}
            value={state.title}
          />
        </div>
        <div className="flex-auto">
          <Input
            variant="bordered"
            size="sm"
            type="number"
            isRequired
            placeholder="9.99"
            color="primary"
            name="cost"
            onValueChange={e => handleValueChange(e, 'cost')}
            value={state.cost}
            endContent={<FaDollarSign />}
          />
        </div>
        <div className="flex-auto">
          <Button
            type="submit"
            isIconOnly
            color="success"
            variant="flat"
            size="lg"
          >
            <FaPlus />
          </Button>
        </div>
      </div>
    </form>
  )
}
