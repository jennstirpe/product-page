import styled from "styled-components";

export const StyledCheckout = styled.div`
    background: white;
    width: 22rem;
    min-height: 30rem;
    z-index: 10;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 2rem;
    box-shadow: 0 0 1rem black;
    padding: 1rem;

    .customer-contact {
        margin-bottom: 1rem;

        h3 {
            margin: .75rem 0;
        }
    }

    input[type=text], input[type=email], input[type=number], select {
        width: 100%;
        height: 2.5rem;
        padding: 0 .5rem;
        margin-bottom: .5rem;
        border-radius: .25rem;
        border: 1px solid black;

        &:focus {
            outline: none;
            border: 2px solid ${({theme}) => theme.mainAccent};
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .mail-list {
        font-size: .85rem;

        input {
            margin-right: .5rem;
        }
    }

    #ship-btn, #shop-btn {
        width: 100%;
        height: 3rem;
        border: none;
        border-radius: .25rem;
        transition: 500ms;
        font-weight: 700;

        &:hover {
            cursor: pointer;
            opacity: .5;
        }
    }

    #ship-btn  {
        background: ${({theme}) => theme.mainAccent};
        color: white;
        margin-bottom: 1rem;

        &:hover {
            cursor: pointer;
            opacity: .5;
        }
    }



`;