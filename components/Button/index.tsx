import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: ${props => props.color};
    font-size: 16x;
    border-color: ${props => props.color};
    border: 1px solid;
    border-radius: 8px;
    &:hover {
        background-color: ${props => props.color};
        color: white;
    }
    p {
        margin: 0.5rem 1rem;
    }
`

interface Props {
    text: string,
    color: string,
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

export const Button: React.FC<Props> = (props) => {
    return (
        <StyledButton color={props.color}>
            <p>{props.text}</p>
        </StyledButton>
    )
}
