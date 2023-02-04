import React, { useEffect } from 'react'
import Head from 'next/head'
import { Home } from '@/components/Home'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Index() {
  return (
    <>
      <Head>
        <title>Danmyers.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
      <header>
      <Header />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
      </>
    </>
  )
}
