import Head from 'next/head';
import styles from '@/styles/Home.module.css'
import useSaveCountryPreference from '../hooks/useSaveCountryPreference';
import Link from 'next/link';
import { Nav } from '../styles/styles';

export default function GB () {
    useSaveCountryPreference('en-GB');
    return(<>
        <Head>
          <title>Deblock in en-GB</title>
          <meta name="description" content="Deblock in en-GB" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav>
            <Link href="/scrollAnimation">Go to Exercise 2 (Animation + Scroll)</Link>
        </Nav>
        <main className={styles.main}>
            English web 🇬🇧! Welcome!!
        </main>
    </>)
}