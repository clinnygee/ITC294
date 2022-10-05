import React from 'react';
import Link from 'next/link';
import styles from '../../styles/layout.module.css'
import Cart_Icon from './Cart_Icon';

export default function Header () {
    return (
        <div className={styles.header}>
            <div className={styles.header_top}>

            </div>
            <div className={styles.header_content}>
                <div className={styles.title}>
                    
                    <p className={styles.title_p}>
                        The Name
                    </p>
                </div>
                <Cart_Icon />

            </div>
            <div className={styles.header_nav}>
                <div className={styles.nav_container}>
                    <div className={styles.nav_item}>
                        <Link href="/">
                        <p className={styles.nav_text}>
                            Home
                        </p>
                        </Link>
                        
                    </div>
                    <div className={styles.nav_item}>
                    <Link href="/products">
                    <p className={styles.nav_text}>
                            Products
                        </p>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

