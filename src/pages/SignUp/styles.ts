import { styled } from 'styled-components';
import { shade } from 'polished';

import SignUpBackgroundImage from '../../assets/sign-up-background.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    width: 100%;
    max-width: 700px;
    align-items: center;

    form{
        margin: 80px 0;
        width: 340px;
        text-align: center;

    h1{
        margin-bottom: 24px;
    }

     a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        &:hover {
            color: ${shade(0.2, '#f4ede8')};
        }
    }
}
 > a{
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
        margin-right: 16px;
    }
    &:hover {
        color: ${shade(0.2, '#f4ede8')};
    }
 }
`;
export const Background = styled.div`
flex: 1;
background: url(${SignUpBackgroundImage}) no-repeat center;
background-size: cover;

`;
