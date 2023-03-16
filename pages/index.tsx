import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import CubeCompontent from '../components/Cube/CubeComponent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dan Myers</title>
        <meta name="description" content="Dan's Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>
      <main className={styles.main}>
        <CubeCompontent />
      </main>
    </>
  )
}
