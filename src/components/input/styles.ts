import styled from "styled-components"


export const Container = styled.div`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    display: flex;
    color: #666360;
    align-items: center;
    &+div{
        margin-top: 16px;
    }
    input {
        flex: 1;
        border: 0;
        color: #f4ede8;
        background: transparent;
        &+::placeholder{
            color: #666360;
        }
        width: 100%;
    }
    svg {
        margin-right: 16px;
    }
    `;



