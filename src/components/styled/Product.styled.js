import styled from "styled-components";

export const StyledProduct = styled.main`
    
/* MOBILE STYLES */

/* GALLERY STYLES */
    .gallery {
        position: relative;
        pointer-events: none;

        .thumbnails {
            display: none;
        }

        .gallery-btn {
            position: absolute;
            top: 50%;
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 50%;
            border: none;
            
            &:hover {
                cursor: pointer;
                
                svg {
                    color: ${({theme}) => theme.mainAccent};
                }
                
            }
        }

        .next {
            right: 1rem;

            svg {
                margin: .15rem 0 0 .1rem;
            }
        }

        .prev {
            left: 1rem;
            
            svg {
                margin: .15rem .2rem 0 0;
            }
        }

        .product-img {
            width: 100vw;
        }
    }


/* PRODUCT DETAIL STYLES */

    .product-details {
        padding: 2rem;

        .details {
            .company-name {
                text-transform: uppercase;
                font-weight: 700;
                color: ${({theme}) => theme.mainAccent};
                font-size: .85rem;
                letter-spacing: 1px;
            }

            .product-name {
                color: ${({theme}) => theme.headerText};
                font-size: 2rem;
                margin: 1rem 0;
            }

            .product-description  {
                line-height: 1.5rem;
                font-size: .9rem;
            }
        }

        .pricing {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .sale-pricing {
                width: 10rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 1.5rem 0;

                .current-price {
                    color: ${({theme}) => theme.headerText};
                    font-size: 1.75rem;
                }

                .discount {
                    background: ${({theme}) => theme.saleBg};
                    color: ${({theme}) => theme.mainAccent};
                    font-weight: 700;
                    padding: .25rem .5rem;
                    border-radius: .35rem;
                }
            }

            .retail-price {
                font-weight: 700;
                color: ${({theme}) => theme.subText};
                text-decoration: line-through;
            }
        }

/* ADD-TO-CART STYLES */
        .purchase {
            
            .quantity {
                background: ${({theme}) => theme.quantityBg};
                height: 4rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: .5rem;
                margin-bottom: 1rem;

                .quantity-btn {
                    height: 4rem;
                    width: 4rem;
                    background: ${({theme}) => theme.quantityBg};
                    border: none;
                    border-radius: .75rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all 200ms linear;

                    &:hover {
                        cursor: pointer;

                        svg path {
                            opacity: .5;
                        }
                    }
                }

                .quantity-amt {
                    font-weight: 700;
                    color: ${({theme}) => theme.headerText};
                }
            }

            .add-to-cart {
                .add {
                    border-radius: .5rem;
                    border: none;
                    height: 4rem;
                    width: 100%;
                    display: flex;
                    flex-direction: row-reverse;
                    justify-content: center;
                    align-items: center;
                    background: ${({theme}) => theme.mainAccent};
                    transition: all 200ms linear;

                    span {
                        color: white;
                        font-weight: 700;
                        font-size: 1rem;
                        margin-left: 1rem;
                    }

                    svg path {
                        fill: white;
                    }

                    &:hover {
                        cursor: pointer;
                        opacity: .75;
                        box-shadow: 0rem 1rem .75rem rgba(255, 125, 26, .4);
                    }
                }
            }
        }
    }
 

/* DESKTOP STYLES */
    @media (min-width: 800px) {
        width: 100%;
        margin-top: 5rem;
        padding: 0 2rem;
        display: flex;
        justify-content: center;

/* GALLERY STYLES */
        .gallery {
            pointer-events: auto;
            height: 32rem;
            width: 50%;
            max-width: 31rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .gallery-btn {
                display: none;
            }

            .product-img {
                width: 25rem;
                border-radius: .75rem;
                margin-bottom: 1.5rem;

                &:hover {
                    cursor: pointer;
                }
            }

            .thumbnails {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 25rem;
                list-style: none;


                .thumbnail {
                    width: 4.75rem;
                    height: 4.75rem;
                    box-sizing: content-box;
                    transition: 500ms;

                    img {
                        width: 4.75rem;
                        height: 4.75rem;
                        border-radius: .6rem;
                    }

                    &:hover {
                        cursor: pointer;
                        opacity: .7;

                    }
                }
                

                .active {
                    img {
                        opacity: .5;
                    }
                    
                    border: 2px solid ${({theme}) => theme.mainAccent};
                    border-radius:.75rem;
                }
            }
        }

/* LIGHTBOX STYLES */
        .lightbox {
           position: absolute;
           top: 0;
           z-index: 10;
           background: rgba(0, 0, 0, .75);
           min-height: 100vh;
           width: 100%;
           display: flex;
           justify-content: center;
           align-items: center;

           .lightbox-close {
               position: relative;
               font-size: 2rem;
               top: -0.5rem;
               right: -12rem;
               color: white;
               transition: 250ms;

               &:hover {
                   cursor: pointer;
                   color: ${({theme}) => theme.mainAccent};
               }
           }

           .gallery-btn {
                display: block;
                top: 40%;
            }

            .next {
                right: 1.75rem;
            }
            
            .prev {
                left: 1.75rem;
            }
        }
        
/* PRODUCT DETAIL STYLES */
        .product-details {
            width: 50%;
            max-width: 31rem;
            padding: 0 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .details {

                .product-name {
                    font-size: 2.25rem;
                    margin-top: .5rem;
                    margin-bottom: 1rem;
                }

                .product-description  {
                    margin-bottom: .5rem;
                }
            }

            .pricing {
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;

                .sale-pricing {
                    margin: .75rem 0;

                    .discount {
                        padding: .25rem .7rem;
                        margin-left: 1rem;
                    }
                }
            }

/* ADD-TO-CART STYLES */
            .purchase {
                margin-top: 1.5rem;
                display: flex;
                justify-content: space-between;
                
                .quantity {
                    width: 38%;
                    height: 3rem;
                    margin: 0;

                    .quantity-btn {
                        height: 3rem;
                        width: 3rem;
                    }
                }

                .add-to-cart {
                    width: 58%;
                    margin-right: .5rem;

                    .add {
                        height: 3rem;

                        span {
                            font-size: .85rem;
                        }
                    }
                }
            } 
        }
    }

`;
