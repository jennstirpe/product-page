import styled from "styled-components";

export const StyledNav = styled.nav`
    position: relative;
    background: white;

    .darkscale {
        position: absolute;
        top: -1.5rem;
        left: -2rem;
        height: 110vh;
        width: 110vh;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 4;
    }

    #menu {
        position: relative;
        margin-right: 1rem;
        z-index: 5;

        &:hover {
            cursor: pointer;
        }
    }

    .primary__nav {
        display: none;
        position: absolute;
        top: -1.5rem;
        left: -1.5rem;
        background: white;
        padding: 1.5rem;
        width: 15rem;
        height: 110vh;
        list-style: none;
        z-index: 5;

        #close {
            margin-bottom: 1rem;

            &:hover {
                cursor: pointer;
            }
        }

        .nav-item {
            margin: 1rem 0;

            a {
                text-decoration: none;
                color: ${({theme}) => theme.headerText};
                font-weight: 700;
            }
            
        }
    }

    .open {
        display: block;
    }


    @media (min-width: 800px) {
        width: 75%;
        display: flex;
        align-items: center;
        margin-left: 10%;

        #menu {
            display: none;
        }

        .primary__nav {
        display: flex;
        justify-content: space-evenly;
        position: static;
        background: white;
        width: 25rem;
        height: 100%;
        padding: 0;

        #close {
            display: none;
        }

        .nav-item {

            a {
                color: ${({theme}) => theme.mainText};
                font-weight: 400;
                transition: color 250ms linear;

                &:hover {
                    color: ${({theme}) => theme.headerText};
                    border-bottom: 4px solid ${({theme}) => theme.mainAccent};
                    padding-bottom: 2.5rem;
                }
            }
            
        }
    }
    }

`;