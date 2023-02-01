import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Index.module.css'
import { Home } from '@/components/Home'

export default function Index() {
  return (
    <>
      <Head>
        <title>Danmyers.net</title>
        <meta name="description" content="Hello" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Home />
      </main>
    </>
  )
}
