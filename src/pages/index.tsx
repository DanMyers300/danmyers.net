import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Footer />
      </main>
    </>
  )
}
