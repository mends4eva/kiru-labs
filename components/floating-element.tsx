'use client'

import { ReactNode } from 'react'

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  animation?: 'float' | 'float-slow' | 'float-reverse'
  className?: string
}

export function FloatingElement({
  children,
  delay = 0,
  animation = 'float',
  className = '',
}: FloatingElementProps) {
  return (
    <div
      className={`${animation} ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
