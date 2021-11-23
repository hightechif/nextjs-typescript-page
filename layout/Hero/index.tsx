import styled from "styled-components"

const StyledHero = styled.div`
    background: #FAFDFE;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 60px 120px 120px;

    width: 100%;
    height: 460px;

    background: #FAFDFE;
`

export const Hero = () => {
    return (
        <StyledHero>
            This is hero section
        </StyledHero>
    )
}
