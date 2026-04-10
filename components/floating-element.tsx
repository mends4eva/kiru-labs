'use client'

import { ReactNode } from 'react'

interface FloatingElementProps {
  children: ReactNode
  className?: string
}

export function FloatingElement({
  children,
  className = '',
}: FloatingElementProps) {
  return (
    <div className={`smooth-all ${className}`}>
      {children}
    </div>
  )
}

