import React from 'react'
import { Divider, Skeleton } from '@nextui-org/react'

export default function ItemsLoader() {
  return (
    <div className="max-w-2xl w-full flex flex-col items-center gap-3 md:gap-6">
      <div className="w-full flex items-center gap-4 opacity-50">
        <div className="w-2/3">
          <Skeleton className="h-3 w-1/3 rounded-lg" />
        </div>
        <Skeleton className="h-3 w-1/4 rounded-lg" />
        <div className="flex-auto flex justify-end">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
      <div className="w-full flex items-center gap-4 opacity-50">
        <Skeleton className="h-3 w-2/3 rounded-lg" />
        <Skeleton className="h-3 w-1/4 rounded-lg" />
        <div className="flex-auto flex justify-end">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
      <div className="w-full flex items-center gap-4 opacity-50">
        <div className="w-2/3">
          <Skeleton className="h-3 w-2/3 rounded-lg" />
        </div>
        <Skeleton className="h-3 w-1/4 rounded-lg" />
        <div className="flex-auto flex justify-end">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
      <Divider />
      <div className="w-full flex flex-row-reverse gap-4 opacity-50">
        <Skeleton className="h-3 w-1/6 rounded-lg" />
        <Skeleton className="h-3 w-1/4 rounded-lg" />
      </div>
    </div>
  )
}
