import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { IconBaseProps } from 'react-icons'

import { Container } from './styles';
import { useField } from "@unform/core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, name: nameField, ...rest }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setisFocused] = useState(false);
    const [filled, setIsFilled] = useState(false);

    const { error, fieldName, defaultValue, registerField } = useField(nameField)

    const handleInputFocus = useCallback(() => {
        setisFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setisFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({ name: fieldName, ref: inputRef.current, path: 'value' })
    }, [fieldName, registerField])

    return (
        <Container $isFilled={filled} $isFocused={focused}>
            {Icon && <Icon />}
            <input
                ref={inputRef}
                onFocus={handleInputFocus}
                defaultValue={defaultValue}
                onBlur={handleInputBlur}
                {...rest}
            ></input>
            {error}
        </Container>
    )
}

export default Input;
