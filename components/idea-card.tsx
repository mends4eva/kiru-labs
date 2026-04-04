'use client'

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface IdeaCardProps {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const StyledWrapper = styled.div`
  .card {
    background: #f5f5f5;
    position: relative;
    padding: 1.8rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 350px;
  }

  .card-details {
    color: black;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
  }

  .card-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-center;
    margin-bottom: 0.5rem;
  }

  .card-button {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background-color: #008bf8;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .text-title {
    font-size: 1.25em;
    font-weight: bold;
    margin: 0;
  }

  .text-body {
    color: rgb(134, 134, 134);
    font-size: 0.95em;
    line-height: 1.5;
    margin: 0;
  }

  .card:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }

  @media (max-width: 768px) {
    .card {
      padding: 1.5rem;
      min-height: 320px;
    }

    .text-title {
      font-size: 1.1em;
    }

    .text-body {
      font-size: 0.9em;
    }
  }
`

export function IdeaCard({ id, title, description, icon }: IdeaCardProps) {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-details">
          <div className="card-icon">
            {icon}
          </div>
          <p className="text-title">{title}</p>
          <p className="text-body">{description}</p>
        </div>
        <Link href={`/ideas/${id}`} className="card-button">
          More info
          <ArrowRight size={18} />
        </Link>
      </div>
    </StyledWrapper>
  )
}
