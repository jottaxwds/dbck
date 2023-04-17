import Head from 'next/head';
import styles from '@/styles/Home.module.css'
import React from 'react';
import useSaveCountryPreference from '../hooks/useSaveCountryPreference';
import Link from 'next/link';


export default function FR () {
    useSaveCountryPreference('fr-FR');
    return(<>
        <Head>
          <title>Deblock au fr-FR</title>
          <meta name="description" content="Deblock in fr-FR" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav>
            <Link href="/scrollAnimation"><button>Go to Exercise 2 (Animation + Scroll)</button></Link>
        </nav>
        <main className={styles.main}>
            Françoise web 🇫🇷! Tres bien!
        </main>
    </>)
}