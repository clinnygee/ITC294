import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/layout/Header';
import styles from '../styles/layout.module.css'
import products_css from '../styles/products.module.css'
import ProductCard from '../components/ProductCard';
import items from '../lib/productsdata'
import Link from 'next/link';

export default function products (){
    
    return (
        <div className={styles.app_container}>
            <Header />

            <div className={products_css.container}>
                {items.map(item => {
                    return(
                        <ProductCard props={item}/>
                    )
                })}
                
            </div>
        </div>
        
        
    );
};



