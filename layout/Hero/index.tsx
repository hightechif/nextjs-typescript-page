import styled from "styled-components"
import { SearchBar } from "../../components/SearchBar"

const StyledHero = styled.div`
    background: #FAFDFE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 120px 120px 240px;
    width: 100%;
    .container {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    h1 {
        max-width: 800px;
        font-size: 48px;
    }
    p {
        font-size: 24px;
    }
    @media screen and (min-width: 359px) and (max-width: 767px) {
        padding: 40px 40px;
        h1 {
            font-size: 40px;
        }
        p {
            font-size: 20px;
        }
    }
`

export const Hero = () => {
    return (
        <StyledHero>
            <div className="container">
                <h1>Temukan Software dan Layanan Terbaik Indonesia</h1>
                <p>Jelajahi 300+ kategori dengan review pengguna 100% terverifikasi.</p>
                <SearchBar placeholder="Cari nama produk, kategori software, pengembang ..."/>
            </div>
        </StyledHero>
    )
}
