import { Inter } from '@next/font/google'
import styles from '@/styles/Index.module.css'
import Footer from '@/components/Footer'
import MainHomePage from '@/components/Home'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <MainHomePage />
        <Footer />
      </main>
    </>
  )
}
