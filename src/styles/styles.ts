import styled from "styled-components";

export const Nav = styled.nav`
    padding: 2rem;
    color: blue;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #DADFE0;
    height: auto;
    z-index: 999;
    width: 100%;
    
    a {
        border: 1px solid black;
        padding: 0.5rem;
    }
`;

export const Title = styled.h2`
    margin-bottom: 2rem;
`;
export const Text = styled.p`
    margin: 2rem 0;
`;

export const PageNavigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    color: blue;
    margin-bottom: 3rem;
`;