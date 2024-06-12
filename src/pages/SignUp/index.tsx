import React, { useCallback, useRef, useState } from "react";
import { Background, Container, Content } from "./styles";
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import Input from "../../components/input";
import Button from "../../components/button";
import * as Yup from 'yup';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import getValidationErrors from "../../utils/getValidationErrors";
const SignUp: React.FC = () => {


    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (event: React.FormEvent<Element> | undefined, data:object) => {
        event?.preventDefault();

        try {
            formRef.current?.setErrors({})
            const schema = Yup.object().shape({
                name: Yup.string().required("Nome obrigatório"),
                email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
                password: Yup.string().min(6, 'No mínimo 6 caracteres'),
            });
            await schema.validate(data, { abortEarly: false });

        } catch (err) {
            if (err) {
                const errors = getValidationErrors(err as Yup.ValidationError);
                formRef.current?.setErrors(errors);
            }
        }
    }, [])
    return (
        <Container>
            <Background />
            <Content>
                <img src={logo} alt="GoBarber" />
                <Form ref={formRef} onSubmit={(data, helpers, event) => handleSubmit(event, data)} children=
                    {<>
                        <h1>Faça seu Cadastro</h1>
                        <Input icon={FiUser} placeholder="Nome" name="name" />
                        <Input icon={FiMail} placeholder="e-mail" name="email" />
                        <Input icon={FiLock} placeholder="password" name="password" type="password" />
                        <Button type="submit" >CADASTRAR</Button>
                    </>
                    }
                    placeholder=''
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                />

                <a href="/" >
                    <FiArrowLeft />
                    Voltar para LogOn</a>
            </Content>
        </Container >
    );
}


export default SignUp;
