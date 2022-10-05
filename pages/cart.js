import React from 'react';
import styles from '../styles/layout.module.css'
import Header from '../components/layout/Header'
import {  useCart } from "react-use-cart";
import cartStyles from '../styles/cart.module.css';
import CartItem from '../components/CartItem';

export default function cart() {
    const {items} = useCart();

    console.log(items);
    return (
        <div className={styles.app_container}>
            <Header />
            <div className={cartStyles.container}>
                <div className={cartStyles.header_container}>
                    <p>Shopping Cart</p>
                </div>
                <div className={cartStyles.cart_container}>
                    
                        <table className={cartStyles.cart_table}>
                        <thead >
                            <tr>
                                <th className={cartStyles.col}><span>Item</span></th>
                                <th className={cartStyles.col}><span>Price</span></th>
                                <th className={cartStyles.col}><span>Qty</span></th>
                                <th className={cartStyles.col}><span>Subtotal</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => {
                                return(
                                    <CartItem item={item}/>
                                )
                            })}
                        </tbody>
                        </table>
                    
                    <div className={cartStyles.checkout_container}>
                        <table className={cartStyles.checkout_summary_table}>
                            <thead>
                                <tr><p>Summary</p></tr>
                            </thead>
                            <tr>
                                <td>Subtotal</td>
                                <td>$99.99</td>
                            </tr>
                            <tr>
                                <td>Tax (included)</td>
                                <td>$9.99</td>
                            </tr>
                            <tr>
                                <td>ORDER TOTAL</td>
                                <td>$99.99</td>
                            </tr>
                        </table>
                        <div className={cartStyles.checkout_button_container}>
                            <button className={cartStyles.checkout_button} >
                                INSTANT CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

