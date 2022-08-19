import { useState } from "react";
import { StyledProduct } from "./styled/Product.styled";
import { v4 as uuid } from 'uuid';

import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";

export default function Product({ addToCart }) {

    // Will be passed in as props
    const productName = "Fall Limited Edition Sneakers";
    const retailPrice = 250;
    const discount = .5;
    const currentPrice = (retailPrice * (1 - discount)).toFixed(2);
    const productImgs = [img1, img2, img3, img4];

    const [activeImg, setActiveImg] = useState(productImgs[0]); 
    const [activeIndex, setActiveIndex] = useState(0);

    const [quantityCount, setQuantityCount] = useState(1);
   

    const [lightboxActive, setLightboxActive] = useState(false);


    function nextImg() {
        const currentIndex = activeIndex;
        const newImgIndex = currentIndex + 1;

        if(newImgIndex > productImgs.length - 1) {
            setActiveIndex(0);
            setActiveImg([productImgs[0]]);
        } else {
            setActiveIndex(newImgIndex);
            setActiveImg([productImgs[newImgIndex]]);
        }
    }

    function prevImg() {
        const currentIndex = activeIndex;
        const newImgIndex = currentIndex - 1;

        if(newImgIndex < 0) {
            setActiveIndex(productImgs.length - 1);
            setActiveImg(productImgs[productImgs.length - 1]);
        } else {
            setActiveIndex(newImgIndex);
            setActiveImg([productImgs[newImgIndex]]);
        }
    }

    function increaseQuantity() {
        const prevQuantity = quantityCount;
        setQuantityCount(prevQuantity + 1);
    }

    function decreaseQuantity() {
        const prevQuantity = quantityCount;

        if (prevQuantity === 1) {
            return
        } else {
            setQuantityCount(prevQuantity - 1);
        }
    }


    function changeMainImg(img) {
        setActiveImg(img);
    }

    function displayLightbox() {
        setLightboxActive(true);
    }

    function closeLightbox() {
        setLightboxActive(false);
    }

    function handleAddToCart() {
        addToCart(productName, currentPrice, quantityCount, productImgs[0]);
    }


  return (
    <StyledProduct className="">
       
       { lightboxActive &&  <div className="lightbox">
            <section className="gallery">
                <span onClick={closeLightbox} class="lightbox-close">x</span>
                <button onClick={prevImg} className="gallery-btn prev" aria-label="previous image"><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></button>
                <button onClick={nextImg} className="gallery-btn next" aria-label="next image"><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></button>
                <img onClick={displayLightbox} className="product-img" src={activeImg} alt="Product image" />
                <ul className="thumbnails">
                    {
                        productImgs.map(img => {
                            return <li key={uuid()} className={img == activeImg ? "thumbnail active" : "thumbnail"} 
                            ><img onClick={() => changeMainImg(img)} src={img} alt="product image" /></li>
                        })
                    }
                </ul>
            </section>
        </div> }

        <section className="gallery">
            <button onClick={prevImg} className="gallery-btn prev" aria-label="previous image"><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></button>
            <button onClick={nextImg} className="gallery-btn next" aria-label="next image"><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></button>
            <img onClick={displayLightbox} className="product-img" src={activeImg} alt="Product image" />
            <ul className="thumbnails">
                {
                    productImgs.map(img => {
                        return <li key={uuid()} className={img == activeImg ? "thumbnail active" : "thumbnail"} 
                        ><img onClick={() => changeMainImg(img)} src={img} alt="product image" /></li>
                    })
                }
            </ul>
        </section>

        <section className="product-details">

            <div className="details">
                <span className="company-name">Sneaker Company</span>
                <h1 className="product-name">{productName}</h1>
                <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            </div>

            <div className="pricing">
                <div className="sale-pricing">
                    <h2 className="current-price">${currentPrice}</h2>
                    <p className="discount">{discount * 100}%</p>
                </div>
                <p className="retail-price">${retailPrice.toFixed(2)}</p>
            </div>

            <div className="purchase">
                <div className="quantity">
                    <button onClick={decreaseQuantity} className="quantity-btn minus" aria-label="decrease quantity"><svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a"/></svg></button>
                    <span className="quantity-amt">{quantityCount}</span>
                    <button onClick={increaseQuantity} className="quantity-btn plus" aria-label="increase quantity"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b"/></svg></button>
                </div>

                <div className="add-to-cart">
                    <button onClick={handleAddToCart} className="add"><span>Add to cart</span> <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg></button>
                    {/* on submit, get product image, name, cost & quantity(multiplied by quantity) */}
                </div>  
            </div>
        </section>
    </StyledProduct>
  )
}
