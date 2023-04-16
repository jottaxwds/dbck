import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import styled from 'styled-components'
import React from 'react';
import { countriesLookup } from '../constants'
import useCountry from '../hooks/useCountry'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useCountry();
  return (
    <>
      <Head>
        <title>Deblock 01 task</title>
        <meta name="description" content="Deblock 01 task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.h1}> Choose wisely...</h1>
        <Link href="/en-GB">English 🇬🇧</Link>
        <Link href="/fr-FR">France 🇫🇷</Link>
      </main>
    </>
  )
}
