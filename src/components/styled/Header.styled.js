import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 4rem;
    width: 100%;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .user-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 5rem;
        height: 4rem;
        position: relative;

        #cart {
            background: none;
            border: none;
            transition: all 250ms linear;

            &:hover {
                cursor: pointer;

                svg path {
                    fill: ${({theme}) => theme.headerText};
                }
            }
        }

        #cart-total {
            background: ${({theme}) => theme.mainAccent};
            color: white;
            font-size: .5rem;
            padding: .1rem .45rem;
            border-radius: .5rem;
            position: absolute;
            top: 1rem;
            left: .5rem;
        }

        #avatar {
            height: 2rem;
            transition: border 100ms linear, height 100ms linear;

            &:hover {
                cursor: pointer;
                border: 2px solid ${({theme}) => theme.mainAccent};
                border-radius: 50%;
                height: 2.5rem;
            }
        }
    }


    @media (min-width: 800px) {
        height: 6.5rem;
        border-bottom: 1px solid ${({theme}) => theme.subText};
    }
`;