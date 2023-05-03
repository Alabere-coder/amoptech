import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import AutoSlider from './../components/AutoSlide';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Amoptech General Forum</title>
        <meta name="description" content="Generated by AMOPTECH" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <main>
        <Navbar />
        <div className={styles.description}>
          
          <h1>Welcome to Amoptech General Website</h1>
          <AutoSlider />
        </div>
      </main>
    </>
  )
}
