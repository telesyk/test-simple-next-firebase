'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export function RootProvider({ children }) {
  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  )
}
