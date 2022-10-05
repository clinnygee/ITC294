import React from 'react';
import products_css from '../styles/products.module.css'
import Link from 'next/link';

export default function ProductCard(props) {
    console.log(props);
    console.log(props.props.name);
    return (
        <Link href={'/products/'+props.props.id}>
        
        <div className={products_css.product_container}>
            <div className={products_css.image_container}>
                <img src={props.props.images.image1} className={products_css.image}></img>
            </div>
            <div className={products_css.description_container}>
                <p className={products_css.text}>
                    {props.props.name}
                </p>
                <div className={products_css.sizes_container}>
                    {props.props.sizes.map(item => {
                        return (
                            <div className={products_css.size}>
                                <p className={products_css.size_text + item.available == true ? products_css.available : products_css.unavailable}>
                                    {item.size}
                                </p>
                            </div>
                        )
                    })}
                    
                </div>
                <div className={products_css.price_container}>
                    <p className={products_css.text}>${props.props.price}</p>
                    
                </div>
            </div>
        </div>
         </Link>
    );
};

