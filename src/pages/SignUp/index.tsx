import React from "react";
import { Background, Container, Content } from "./styles";
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import Input from "../../components/input";
import Button from "../../components/button";

const SignUp: React.FC = () => {
    return (
        <Container>
            <Background />
            <Content>
                <img src={logo} alt="GoBarber" />
                <form>
                    <h1>Faça seu Cadastro</h1>
                    <Input icon={FiUser} placeholder="Nome" name="name" />
                    <Input icon={FiMail} placeholder="e-mail" name="e-mail" />
                    <Input icon={FiLock} placeholder="password" name="password" type="password" />
                    <Button type="submit" >CADASTRAR</Button>

                </form>
                <a href="/" >
                    <FiArrowLeft />
                    Voltar para LogOn</a>
            </Content>
        </Container>
    );
}


export default SignUp;
