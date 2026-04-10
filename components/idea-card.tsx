'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface IdeaCardProps {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export function IdeaCard({ id, title, description, icon }: IdeaCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative bg-gray-100 border-2 border-gray-400 rounded-3xl p-7 md:p-8 flex flex-col h-full min-h-96 transition-all duration-500 ease-out hover:border-blue-500 hover:shadow-lg group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-4 flex-grow">
        <div className="w-12 h-12 flex items-center justify-center text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="text-gray-500 text-base leading-relaxed">{description}</p>
      </div>
      
      <Link
        href={`/ideas/${id}`}
        className={`absolute left-1/2 bottom-0 -translate-x-1/2 w-3/5 rounded-2xl bg-blue-500 text-white font-medium px-4 py-3 flex items-center justify-center gap-2 transition-all duration-300 ease-out pointer-events-none ${
          isHovered ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0'
        }`}
      >
        More info
        <ArrowRight size={18} />
      </Link>
    </div>
  )
}
