import { StyledCart } from "./styled/Cart.styled";
import productImg from "../images/image-product-1.jpg";

import CartItem from "./CartItem";

export default function Cart({ cartContents, removeFromCart, openCheckout }) {


    function handleOpenCheckout(e) {
        e.preventDefault()
        openCheckout()
    }

    if (cartContents.length > 0) {
        return (
        <StyledCart>
            <h3>Cart</h3>
            <div className="cart">
                {
                    cartContents.map(item => {
                        return <CartItem key={item.id} id={item.id} removeFromCart={removeFromCart} itemName={item.name} itemPrice={item.price} quantity={item.quantity} productImg={productImg} />
                    })
                }
                        
                <div className="checkout">
                    <button onClick={handleOpenCheckout} className="checkout-btn">Checkout</button>
                </div>
            </div>
        </StyledCart>
    )} else {
        return (
            <StyledCart>
                <h3>Cart</h3>
                <div className="empty-cart">
                    <p className="empty-message">Your cart is empty</p>
                </div> 
            </StyledCart>
        )       
    }
}
