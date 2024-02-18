'use client'
import { useMemo } from 'react'
import { useItemList } from '@/hooks'
import { getTotalAmount } from '@/utils'
import { FaTrash, FaDollarSign } from 'react-icons/fa6'
import { Listbox, ListboxItem, Button, ListboxSection } from '@nextui-org/react'
import ItemsLoader from './ItemsLoader'
import { useHomeContext } from './home-provider'

function DeleteButton({ handleClick }) {
  return (
    <Button isIconOnly variant="light" color="default" onClick={handleClick}>
      <FaTrash />
    </Button>
  )
}

function ItemTitle({ title }) {
  if (!title) return
  return <span className="flex-1 capitalize">{title}</span>
}

export default function List() {
  const { handleRemoveItems } = useHomeContext()
  const data = useItemList()
  const isLoading = useMemo(() => data.length < 1, [data])
  const totalAmount = useMemo(() => getTotalAmount(data), [data])

  if (isLoading) return <ItemsLoader />

  return (
    <Listbox
      aria-label="Actions"
      disabledKeys={['total']}
      className="max-w-2xl mx-auto"
      emptyContent
    >
      <ListboxSection
        items={data}
        classNames={{
          group: 'flex flex-col flex-col-reverse',
        }}
      >
        {data.map((item, index) => (
          <ListboxItem
            key={item.title + index}
            startContent={<ItemTitle title={item.title} />}
            endContent={
              <DeleteButton handleClick={() => handleRemoveItems(item.id)} />
            }
            textValue={item.title}
            variant="flat"
            color="warning"
            classNames={{
              title: 'flex-none text-base',
            }}
          >
            <span className="font-bold inline-flex gap-2 items-center">
              <FaDollarSign />
              <span>{Number(item.value).toFixed(2)}</span>
            </span>
          </ListboxItem>
        ))}
      </ListboxSection>
      <ListboxSection className="bg-green-900/30 rounded-lg shadow">
        <ListboxItem
          key="total"
          textValue="Summary"
          isReadOnly={true}
          startContent={<span>In total:</span>}
          classNames={{
            base: 'justify-end',
            title: 'flex-none text-lg',
          }}
        >
          <span className="font-bold inline-flex gap-2 items-center">
            <FaDollarSign />
            <span>{totalAmount}</span>
          </span>
        </ListboxItem>
      </ListboxSection>
    </Listbox>
  )
}
