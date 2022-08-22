import styled from "styled-components";

export const StyledCartItem = styled.div`
    width: 20.5rem;
    display: flex;
    align-items: center;
    margin: .5rem 0;

    .product-img {
       width: 4rem;
       border-radius: .5rem;

       &:hover {
           opacity: .5;
       }
    }

    .product-details {
        color: ${({theme}) => theme.mainText};
        margin-left: .5rem;
        margin-right: auto;
               
        h4 {
            font-weight: 400;
        }

        .product-total {
            color: ${({theme}) => theme.headerText};
            font-weight: 700;
        }  
    }

    .delete {
        border: none;
        background: none;
        transition: 250ms;

        &:hover  {
            cursor: pointer;

            .delete-icon {
                opacity: .5;
            }
        }
    }

`;