import styled, { css } from "styled-components"

interface ContainerProps {
    $isFocused?: boolean;
    $isFilled?:boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    display: flex;
    border: 2px solid #232129;
    color: #666360;
    align-items: center;
    &+div{
        margin-top: 16px;
    }

    ${props => props.$isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}
    ${props => props.$isFilled && css`
        color: #ff9000;
    `}

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



