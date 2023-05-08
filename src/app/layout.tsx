import './globals.css'

export const metadata = {
  title: 'Daniel Myers',
  description: 'Made by Dan Myers',
}

export default function RootLayout({ children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
