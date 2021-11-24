import styled from "styled-components"
import { SearchBar } from "../../components/SearchBar"

const StyledHero = styled.div`
    background: #FAFDFE;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 60px 120px 240px;
    
    width: 100%;
    h1 {
        margin: 60px 0 10px;
        max-width: 800px;
        font-size: 48px;
    }
    p {
        margin: 25px 0;
        font-size: 24px;
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
