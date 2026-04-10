'use client'

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface IdeaCardProps {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  category?: string
}

export function IdeaCard({ id, title, description, icon, category }: IdeaCardProps) {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          {/* FRONT: Dark side with centered "Learn more" - visible by default */}
          <div className="front">
            <div className="front-content">
              <div className="icon-wrap">{icon}</div>
              <Link href={`/ideas/${id}`} className="learn-more">
                Learn more
              </Link>
            </div>
          </div>

          {/* BACK: Colorful side with animations and details - shown on hover */}
          <div className="back">
            <div className="img">
              <div className="circle" />
              <div className="circle" id="right" />
              <div className="circle" id="bottom" />
            </div>
            <div className="back-content">
              {category && <div className="badge">{category}</div>}

              <div className="description">
                <div className="title">
                  <p>{title}</p>
                  <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                    <g style={{ mixBlendMode: 'normal' }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset={0} strokeDasharray="0" strokeMiterlimit={10} strokeLinejoin="miter" strokeLinecap="butt" strokeWidth={1} stroke="none" fillRule="nonzero" fill="#20c997">
                      <g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z" /></g>
                    </g>
                  </svg>
                </div>
                <p className="card-footer">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    width: 100%;
    aspect-ratio: 1;
    perspective: 1200px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 20px 2px #000000aa;
    border-radius: 8px;
  }

  .front,
  .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 8px;
    overflow: hidden;
  }

  /* FRONT: Dark side - initially visible */
  .front {
    transform: rotateY(0deg);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .front-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    text-align: center;
  }

  .icon-wrap {
    width: 80px;
    height: 80px;
    display: grid;
    place-items: center;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #20c997;
  }

  /* BACK: Colorful side - shown on hover */
  .back {
    transform: rotateY(180deg);
    position: relative;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  .back .img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: absolute;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  .back-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
  }

  .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
    font-size: 10px;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 11px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .title p {
    margin: 0;
    line-height: 1.3;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
    line-height: 1.4;
  }

  .learn-more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    background: rgba(255, 255, 255, 0.08);
    color: white;
    border-radius: 999px;
    width: fit-content;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: transform 200ms ease, background 200ms ease;
    font-weight: 600;
    font-size: 14px;
  }

  .learn-more:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.12);
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`
