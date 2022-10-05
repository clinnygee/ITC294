import React from 'react';
import { useCart } from "react-use-cart";
import styles from '../../styles/layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCart} from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { BsFillCartFill } from "react-icons/bs";
import Link from 'next/link';
export default function Cart_Icon() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
      
    return (
        <div className={styles.cart}>
            <div className={styles.icon_container}>
                <Link href="/Cart">
                    <div className={styles.cart_icon_link}>
                        <BsFillCartFill className={styles.icon}/>
                    </div>
                </Link>
                
                
            </div>
            
        </div>
    );
};

