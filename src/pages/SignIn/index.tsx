import React from "react";
import { Background, Container, Content } from "./styles";
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import Input from "../../components/input";
import Button from "../../components/button";

const SignIn:React.FC = () =>{
    return (
        <Container>
            <Content>
                    <img src={logo} alt="GoBarber"/>
                    <form>
                        <h1>Faça seu LogOn</h1>
                        <Input icon={FiMail} placeholder="e-mail" name="e-mail"/>
                        <Input icon ={FiLock}placeholder="password" name="password" type="password"/>
                        <Button type="submit" >ENTRAR</Button>

                        <a href="forgot">Esqueci minha senha</a>
                    </form>
                    <a href="/" >
                        <FiLogIn/>
                        Criar Conta</a>
            </Content>
            <Background/>
        </Container>
    );
}


export default SignIn;
