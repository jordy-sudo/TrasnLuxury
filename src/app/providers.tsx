// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import { NavbarUi } from '../components/NavbarUi'
import { FooterUI } from '@/components/FooterUi'



export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
        <main className="dark text-foreground bg-background">
            <NavbarUi/>
            {children}
            <FooterUI />
        </main>
    </NextUIProvider>
  )
}