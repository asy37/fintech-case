// components/Hero.tsx
'use client'
import Image from 'next/image'

export default function AuthHero() {
  return (
    <div className="relative h-full w-[675px]">
      <Image src="/hero.svg" alt="hero" fill className="object-cover" />
    </div>
  )
}
