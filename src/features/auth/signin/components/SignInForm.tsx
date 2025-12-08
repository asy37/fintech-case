// components/SignInForm.tsx
'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Spinner } from '@/components/ui/spinner'

export default function SignInForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      // örnek: gerçek auth çağrısını buraya koy
      await new Promise((r) => setTimeout(r, 800))
      router.push('/dashboard')
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-0 p-0 shadow-none">
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4 p-0">
          <div>
            <Label htmlFor="email" className="text-midnight-blue p-2.5 pl-0">
              Email
            </Label>
            <Input
              className="text-neutral-gray h-12"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              type="email"
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-midnight-blue p-2.5 pl-0">
              Password
            </Label>
            <Input
              className="text-neutral-gray h-12"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              type="password"
              required
            />
          </div>

          <Button
            type="submit"
            className="bg-lime-green text-midnight-blue h-12 w-full"
            disabled={loading}
          >
            {loading ? <Spinner /> : 'Sign In'}
          </Button>

          <div>
            <Button
              type="button"
              variant="outline"
              className="text-neutral-gray h-12 w-full"
              onClick={() => {
                // Google auth flow
                window.location.href = '/api/auth/google'
              }}
            >
              <Image src="/Google.svg" alt="google" height={24} width={24} />
              Sign in with Google
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  )
}
