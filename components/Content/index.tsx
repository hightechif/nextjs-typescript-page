import React from "react"
import { Button } from "../Button"
import styled from "styled-components"
import globalVariables from "../../styles/globalVariables"
import Image from "next/image"

interface StyleProps {
    layout: string
    color: string
}

const StyledCard = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-direction: ${(props: StyleProps) => props.layout};
    background-color: ${(props: StyleProps) => props.color};
    margin: 0;
    padding: 80px 120px;
    .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 15px;
    }
    h2 {
        font-size: 36px;
        max-width: 600px;
    }
    p {
        max-width: 500px;
    }
    @media screen and (min-width: 359px) and (max-width: 768px){
        padding: 50px 50px;
        flex-direction: column;
    }
`

interface Props {
    item: {
        id: number,
        title: string,
        body: string,
        hyperlink: string,
        image: string
    }
}

const Content: React.FC<Props> = ({item: { id, title, body, hyperlink, image }}) => {
    return (
        <StyledCard layout={id % 2 === 0 ? 'row-reverse' : 'row'} color={id % 2 !== 0 ? "#F9F9F9" : globalVariables.color.white}>
            <div>
                <Image src={`/images/${image}`} width="475px" height="400px" alt="Engagement Image" />
            </div>
            <div className="text">
                <h2>{title}</h2>
                <p>{body}</p>
                {hyperlink !== '' && <Button text={hyperlink} color={globalVariables.color.primary} borderRadius={30}/>}
            </div>
        </StyledCard>
    )
}

export default Content
