import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import Header from '../components/layout/Header'

export default function Home() {
  return (
    <div className={styles.app_container}>
            <Header />
        </div>
  )
}
