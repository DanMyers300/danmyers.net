import Head from 'next/head'
import styles from '@/styles/Index.module.css'
import { Home } from '@/components/Home'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Index() {
  return (
    <>
      <Head>
        <title>Danmyers.net</title>
        <meta name="description" content="Hello" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
