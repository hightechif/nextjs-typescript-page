import Content from "../../components/Content";
import styled from "styled-components"
import contents from '../../public/data/contents'

const StyledEngagement = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    @media screen and (min-width: 359px) and (max-width: 768px){
        gap: 30px;
    }
`

export const Engagement = () => {
    return (
        <StyledEngagement>
            {contents.map((item, index) => (
                <Content key={index} item={item} />
            ))}
        </StyledEngagement>
    )
}
