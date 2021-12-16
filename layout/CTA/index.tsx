import { Button } from "../../components/Button"
import globalVariables from "../../styles/globalVariables"
import styled from "styled-components"

const StyledDiv = styled.div`
    background: ${globalVariables.color.primary};
    color: ${globalVariables.color.white};
    border-radius: 10px;
    margin: 60px 120px;
    padding: 60px 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    @media screen and (min-width: 359px) and (max-width: 768px){
        margin: 60px 60px;
        padding: 20px 35px;
    }
`

export const CTA = () => {
    return (
        <StyledDiv>
            <h2>Buat profil produk Anda sekarang, gratis!</h2>
            <p>Tingkatkan peluang berjumpa dengan calon pembeli produk Anda di SoftwareHub</p>
            <Button text="Daftar Sekarang" color={globalVariables.color.primary} />
        </StyledDiv>
    )
}
