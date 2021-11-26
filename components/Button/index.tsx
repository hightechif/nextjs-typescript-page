import React from 'react'
import styled from 'styled-components'

interface StyleProp {
    color: string
    borderRadius: number
}

const StyledButton = styled.button`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: ${(props: StyleProp) => props.color};
    font-size: 1rem;
    border-color: ${(props: StyleProp) => props.color};
    border: 1px solid;
    border-radius: ${(props: StyleProp) => props.borderRadius}px;
    &:hover {
        background-color: ${(props: StyleProp) => props.color};
        color: white;
    }
    p {
        padding: 0.5rem 1rem;
    }
`

interface Props {
    text: string
    color: string
    borderRadius?: number
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

export const Button: React.FC<Props> = (props) => {
    return (
        <StyledButton color={props.color} borderRadius={props.borderRadius ?? 8} >
            <p>{props.text}</p>
        </StyledButton>
    )
}
