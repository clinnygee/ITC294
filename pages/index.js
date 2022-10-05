import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import Header from '../components/layout/Header'

export default function Home() {
  return (
    <div className={styles.app_container}>
            <Header />
            <div className={styles.home_container}>
              <div className={styles.home_image_container}>
                <Image 
                  alt=''
                  height={'500'}
                  width={'300'}
                  src={'https://294website.s3.ap-southeast-2.amazonaws.com/images/tamara-bellis-8Aq_zfMHPbU-unsplash.jpg'}
                />
                </div>
                <div className={styles.home_image_container}>
                <Image 
                  alt=''
                  height={'500'}
                  width={'300'}
                  src={'https://294website.s3.ap-southeast-2.amazonaws.com/images/chalo-garcia-dGcSQgiIK4c-unsplash.jpg'}
                />
                </div>
                <div className={styles.home_image_container}>
                <Image 
                  alt=''
                  height={'500'}
                  width={'300'}
                  src={'https://294website.s3.ap-southeast-2.amazonaws.com/images/jesus-eca-wLrjDSdg9VI-unsplash.jpg'}
                />
                </div>
                <div className={styles.home_image_container}>
                <Image 
                  alt=''
                  height={'500'}
                  width={'300'}
                  src={'https://294website.s3.ap-southeast-2.amazonaws.com/images/astghik-khachatryan-K3dZa39ReUQ-unsplash.jpg'}
                />
                </div>
                             
              
            </div>
        </div>
  )
}
