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
`

export const CTA = () => {
    return (
        <StyledDiv>
            <h2>Buat profil produk Anda sekarang, gratis!</h2>
            <p>Tingkatkan peluang berjumpa dengan calon pembeli produk Anda di SoftConnect.id</p>
            <Button text="Daftar Sekarang" color={globalVariables.color.primary} />
        </StyledDiv>
    )
}
