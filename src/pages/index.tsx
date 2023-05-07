import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>John Peter Nuwagaba</title>
        <meta name="description" content="Official Online Portfolio of John Peter Nuwagaba" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jp.svg" />
      </Head>
      <Layout />
    </>
  )
}
