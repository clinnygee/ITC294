import React, { useEffect, useState } from 'react';
import {  useCart } from "react-use-cart";
import {useRouter} from 'next/router'
import Header from '../../components/layout/Header'
import { getAllProductsIds, getProductData } from '../../lib/SaleItems';
import styles from '../../styles/layout.module.css'
import individualproducts from '../../styles/individualproducts.module.css'
import products_css from '../../styles/products.module.css'

export default function IndividualProduct ({productData}){
    console.log(productData)
    const [selectedSize, setSelectedSize] = useState(0);
    const {addItem} = useCart();
    const router = useRouter();

    useEffect(() => {
        console.log("Current Size: " + selectedSize)
    }, [selectedSize])

    const addToCart = () => {
        let cartProductData = {...productData};
        cartProductData.selectedSize = {selectedSize: selectedSize};
        console.log(cartProductData);
        addItem(cartProductData);
        router.push('/cart');
        
    };

    return(
        <div className={styles.app_container}>
            <Header />
            <div className={individualproducts.container}>
                <div className={individualproducts.pictures_container}>
                    <div className={products_css.image_container}>
                        <img src={productData.images.image1} className={products_css.image}></img>
                    </div>
                </div>
                <div className={individualproducts.checkout_container}>
                    <div className={individualproducts.text_container}>
                        <p className={individualproducts.name}>{productData.name}</p>
                        <p className={individualproducts.price}>${productData.price}</p>
                    </div>
                    <div className={individualproducts.size_container}>
                        <p className={individualproducts.small_text}><span className={individualproducts.blue}>*</span> Sizes (select one)</p>
                    </div>
                    <div className={individualproducts.size_item_container}>
                        {productData.sizes.map(product => {
                            console.log(product.size + ': selectedSize: ' + selectedSize);
                            console.log(product.size == selectedSize);
                            return (                                
                                <div className={product.size == selectedSize ? individualproducts.selected_size_border : individualproducts.size_item_item_container} onClick={() => setSelectedSize(product.size)}> 
                                    <p className={product.size == selectedSize ? individualproducts.selected_size_text : individualproducts.size_item}>{product.size}</p>
                                </div>
                            )
                        }) }

                    </div>
                    <div className={individualproducts.checkout_button_container}>
                        <button className={individualproducts.checkout_button} onClick={() => addToCart()}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export async function getStaticPaths() {
    const ids = getAllProductsIds();
    console.log(ids);
    return {
        paths: ids,
        fallback: false
    }
};

export async function getStaticProps({params}) {
    console.log(params);
    const productData = getProductData(params.id);
    console.log(productData);
    return {
        props: {
            productData,
        },
    };
}