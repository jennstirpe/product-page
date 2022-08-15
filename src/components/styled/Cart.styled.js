import styled from "styled-components";

export const StyledCart = styled.section`
   width: 22.5rem;
   position: absolute;
   z-index: 10;
   right: .5rem;
   top: 4.5rem;
   background: white;
   border-radius: .75rem;
   box-shadow: 0 0 1.5rem ${({theme}) => theme.mainText};

   h3 {
        color: ${({theme}) => theme.headerText};
        font-size: 1rem;
        padding: 1.5rem;
        border-bottom: 2px solid rgb(225, 225, 225);
    }

   .cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;
        

       .cart-item {
        width: 20.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

           .product-img {
               width: 4rem;
               border-radius: .5rem;
           }

           .product-details {
               color: ${({theme}) => theme.mainText};
               
               h4 {
                font-weight: 400;
               }

               .product-total {
                    color: ${({theme}) => theme.headerText};
                    font-weight: 700;
               }  
           }

           .delete {

                &:hover {
                    cursor: pointer; 

                    path {
                        fill: ${({theme}) => theme.headerText};
                    }
                }
                
           }
       }

       .checkout {
           .checkout-btn {
            width: 20.5rem;
            height: 3.5rem;
            border-radius: .75rem;
            margin-top: 1rem;
            border: none;
            background: ${({theme}) => theme.mainAccent};
            color: white;
            font-weight: 700;
            font-size: 1rem;

                &:hover {
                    cursor: pointer;
                    opacity: .75;
                }
           }
       }
   }


   .empty-cart {
        height: 11rem;
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;

        .empty-message {
            font-weight: 700;
        }
   }
   
`;