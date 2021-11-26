import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import globalVariables from '../../styles/globalVariables'

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 15px;
    padding: 1rem;
    box-sizing: border-box;

    &:hover {
        -moz-box-shadow: 0 0 50px rgba(173, 181, 189, 0.16);
        -webkit-box-shadow: 0 0 50px rgba(173, 181, 189, 0.16);
        box-shadow: 0 0 50px rgba(173, 181, 189, 0.16);
    }

    .top {
        display: flex;
        gap: 0.5rem;
    }

    .popularity {
        display: flex;
        align-items: center;
        gap: 0.7rem;
    }

    .icon {
        color: ${globalVariables.color.primary};
        height: 15px;
    }
`

interface Product {
    id: number,
    title: string,
    logo: string,
    category: string,
    rating: number,
    downloads: number,
    banner: string,
}

interface Props {
    data: Product
}

export const Card: React.FC<Props> = (props) => {
    const { data } =  props
    const { id, title, logo, category, rating, downloads, banner } = data
    
    return (
        <StyledCard>
            <div className="top">
                <Image src={logo} width="80" height="80" alt={title} />
                <div className="profile">
                    <h3>{title}</h3>
                    <div className="popularity">
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <span>{rating}</span>
                        <FontAwesomeIcon className="icon" icon={faArrowDown} />
                        <span>({downloads})</span>
                    </div>
                    <p>{category}</p>
                </div>
            </div>
            <div className="bottom">
                <Image src={banner} width="300" height="170" alt={title} />
            </div>
        </StyledCard>
    )
}
