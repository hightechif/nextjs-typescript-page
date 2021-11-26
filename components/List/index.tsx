import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import globalVariables from '../../styles/globalVariables'

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    h3 {
        color: ${globalVariables.color.primary};
    }
    ul > li {
        font-weight: bold;
        list-style: none;
    }
    ul > li:hover {
        text-decoration: underline;
    }
`

interface Props {
    title: string
    item1: string
    item2: string
    item3: string
}

export const List: React.FC<Props> = (props) => {
    return (
        <StyledList>
            <h3>{props.title}</h3>
            <ul>
                <li><Link href=""><a>{`${props.item1} >`}</a></Link></li>
                <li><Link href=""><a>{`${props.item2} >`}</a></Link></li>
                <li><Link href=""><a>{`${props.item3} >`}</a></Link></li>
            </ul>
        </StyledList>
    )
}
