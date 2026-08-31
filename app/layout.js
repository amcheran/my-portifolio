import './globals.css'

export const metadata = {
  title: 'My Mobile Portfolio',
  description: 'Built on mobile using Next.js and Supabase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
