'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface LogoProps {
  height?: number
  width?: number
  className?: string
}

export function Logo({ height = 40, width = 140, className = '' }: LogoProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)

    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <img
      src={isDark ? '/kirulabs-white.png' : '/kirulabs-black.png'}
      alt="Kirulabs"
      style={{ height: `${height}px`, width: 'auto' }}
      className={className}
    />
  )
}
