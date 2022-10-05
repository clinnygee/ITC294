import React from 'react';
import { useCart } from 'react-use-cart';
import cartStyles from '../styles/cart.module.css'

const CartItem = (item) => {
    const {removeItem} = useCart();
    const thisItem = item.item;
    console.log('in cart item');
    console.log(item);
    console.log('this item');
    console.log(thisItem);
    return (
        <tr className={cartStyles.cart_row}>
            <td>
                <div className={cartStyles.cart_image_container}>
                    <img src={thisItem.images.image1} className={cartStyles.image}/>
                    <div className={cartStyles.image_text_container}>
                        <p>{thisItem.name}</p>
                        <p>Size: {thisItem.selectedSize.selectedSize}</p>
                    </div>
                </div>
            </td>
            <td><p className={cartStyles.table_text}>${thisItem.price}</p></td>
            <td><p className={cartStyles.table_text}>1</p></td>
            <td>
                <div className={cartStyles.image_text_container}>
                    <p className={cartStyles.table_text}>${thisItem.price}</p>
                    <button className={cartStyles.remove_button} onClick={() => {
                        removeItem(thisItem.id)
                    }}>Remove</button>
                </div>
                
            
            </td>
        </tr>
    );
};

export default CartItem;