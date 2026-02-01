import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Starter Next.js',
  description: 'Next.js 应用',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
