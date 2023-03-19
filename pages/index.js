
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Srai Shazada Money Transfer - Secure and Fast Online Transactions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.textWrapper}>
        <h1 className={styles.title}>
          Money Transfer
        </h1>

        <p className={styles.description}>
          Secure and fast online transactions
        </p>
       </div>

        <div className={styles.grid}>
        <Link href="/send-money" className={`${styles.card} card`}>
  <h3>Send Money &rarr;</h3>
  <p>Send money to anyone, anywhere in the world.</p>
</Link>

<Link href="/receive-money" className={`${styles.card} card`}>
  <h3>Receive Money &rarr;</h3>
  <p>Receive money from anyone, anywhere in the world.</p>
</Link>

<Link href="/track-transfer" className={`${styles.card} card`}>
  <h3>Track Transfer &rarr;</h3>
  <p>Track the status of your money transfer.</p>
</Link>

<Link href="/rates" className={`${styles.card} card`}>
  <h3>Exchange Rates &rarr;</h3>
  <p>View our competitive exchange rates.</p>
</Link>

        </div>
      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Example
        </a>
      </footer>
    </div>
  )
}
