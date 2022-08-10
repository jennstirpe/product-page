import { useState } from "react";
import { StyledProduct } from "./styled/Product.styled"

import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";

import img1Sm from "../images/image-product-1-thumbnail.jpg";
import img2Sm from "../images/image-product-2-thumbnail.jpg";
import img3Sm from "../images/image-product-3-thumbnail.jpg";
import img4Sm from "../images/image-product-4-thumbnail.jpg";


export default function Product() {
    const productImgs = [img1, img2, img3, img4];
    const thumbnails = [img1Sm, img2Sm, img3Sm, img4Sm];
    const [activeImg, setActiveImg] = useState(productImgs[0]);
    const [activeThumb, setActiveThumb] = useState(thumbnails[0]);


    function nextImg() {
        // const currentImg = activeImg;

        // for(const img of productsImgs) {
        //     if(img ===)
        // }

    
        // setActiveImg()
    }

    function prevImg() {

    }

  return (
    <StyledProduct>
        <section className="gallery">
            <button className="gallery-btn prev" aria-label="previous image"><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></button>
            <button className="gallery-btn next" aria-label="next image"><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></button>
            <img className="product-img" src={activeImg} alt="Product image" />
            <ul className="thumbnails">
                {
                    thumbnails.map(img => {
                        return <li className="thumbnail active"><img src={img} alt="product image" /></li>
                    })
                }
            </ul>
        </section>

        <section className="product-details">

            <div className="details">
                <span className="company-name">Sneaker Company</span>
                <h1 className="product-name">Fall Limited Edition Sneakers</h1>
                <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            </div>

            <div className="pricing">
                <div className="sale-pricing">
                    <h2 className="current-price">$125.00</h2>
                    <p className="discount">50%</p>
                </div>
                <p className="retail-price">$250.00</p>
            </div>

            <div className="purchase">
                <div className="quantity">
                    <button className="quantity-btn minus" aria-label="decrease quantity"><svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a"/></svg></button>
                    <span className="quantity-amt">0</span>
                    <button className="quantity-btn plus" aria-label="increase quantity"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b"/></svg></button>
                </div>
                <div className="add-to-cart">
                    <button className="add"><span>Add to cart</span> <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg></button>
                </div>  
            </div>
        </section>
    </StyledProduct>
  )
}