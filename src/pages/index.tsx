import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React from 'react';
import useCountry from '../hooks/useCountry'


export default function Home() {
  const { isLoading = true } = useCountry();
  console.log('Is Loading -> ', isLoading);
  return React.useMemo(() => (
    <>
      <Head>
        <title>Deblock 01 task</title>
        <meta name="description" content="Deblock 01 task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        isLoading ? <></> : 
        <main className={styles.main}>
          <h1 className={styles.h1}> Choose wisely...</h1>
          <Link href="/en-GB">English 🇬🇧</Link>
          <Link href="/fr-FR">France 🇫🇷</Link>
        </main>
      }
    </>
  ), [isLoading]);
}
