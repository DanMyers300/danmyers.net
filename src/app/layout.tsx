import './globals.css'

export const metadata = {
  title: 'Dan\'s Website',
  description: 'Dan\'s Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
