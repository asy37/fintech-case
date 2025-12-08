'use client'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {


  return (
    <div className="min-h-screen">
    dash layout
    {children}
  </div>
  )
}
