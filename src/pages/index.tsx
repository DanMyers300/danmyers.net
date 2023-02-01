import React, { useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/Index.module.css'
import { Home } from '@/components/Home'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { loadDefaultErrorComponents } from 'next/dist/server/load-components'

export default function Index() {

  useEffect(() => {
    if (document) {
      const preLoader = document.getElementsByClassName(styles.preLoader);
      window.addEventListener("load", () => {
        preLoader[0].classList.add(styles.preLoaderHide);
      });
    }
  }, [])

  return (
    <>
      <Head>
        <title>Danmyers.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
      <div className={styles.preLoader}></div>
    </>
  )
}
