"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface QuoteModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const QuoteModalContext = createContext<QuoteModalContextType | null>(null)

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  )
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext)
  if (!ctx) throw new Error("useQuoteModal must be inside QuoteModalProvider")
  return ctx
}
