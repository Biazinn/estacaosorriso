import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Estação Sorriso',
  description: 'Projeto beneficente de arrecadação de brinquedos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="container my-5">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
