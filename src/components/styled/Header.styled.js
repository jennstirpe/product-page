import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 4rem;
    width: 100%;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 5rem;

        #cart {
            background: none;
            border: none;

            &:hover {
                cursor: pointer;
            }
        }

        #avatar {
            height: 2rem;
        }
    }


    @media (min-width: 800px) {
        height: 6.5rem;
        border-bottom: 1px solid ${({theme}) => theme.subText};
    }
`;