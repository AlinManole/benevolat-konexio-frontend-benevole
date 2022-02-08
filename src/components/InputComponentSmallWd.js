import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    border-radius: 81px;
    width: ${props => props.width || '360px'};
    line-height: 45px;
    font-size: 30px;
    height: 62px;
    background: #F4F4F4;
    border-style: none;
    justify-content: center;
    align-items: center;
    padding-left: 24px;
    margin: 11px;
    
    @media (max-width: 1300.98px) {
        width: 610px;
    }
    
    @media (max-width: 1150.98px) {
        width: 570px;
    }

    @media (max-width: 1090.98px) {
        width: 488px;
    }

    @media (max-width: 510.98px) {
        width: 390px;
    }
`


// Second Input small version
const InputComponentSmallWd = ({ name, placeholder, type, value, width, onChange, autoFocus }) => {
    return (
        <Input
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            width={width}
            onChange={onChange}
            autoFocus={autoFocus}
        />
    )
}

export default InputComponentSmallWd