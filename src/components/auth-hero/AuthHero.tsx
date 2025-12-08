// components/Hero.tsx
'use client'
import React from 'react'
import Image from 'next/image'

export default function AuthHero() {
  return (
    <div className="h-full w-[675px] relative">
      <Image src="/hero.svg" alt="hero" fill className="object-cover" />
    </div>
  )
}
