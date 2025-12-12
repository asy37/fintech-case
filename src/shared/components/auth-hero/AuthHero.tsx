// components/Hero.tsx
'use client'
import Image from 'next/image'

export default function AuthHero() {
  return (
    <div className="h-full w-[675px]">
      <Image
        src="/images/hero-bg.jpg"
        alt="hero"
        fill
        className="object-cover"
      />
    </div>
  )
}
