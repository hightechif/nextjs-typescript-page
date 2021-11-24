import styled from "styled-components"
import { Card } from "../../components/Card"
import globalStyles from "../../styles/globalStyles"
import dummyData from '../../public/data/products';
import { Button } from "../../components/Button";

const StyledProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 120px;
    background: ${globalStyles.color.white};

    h2 {
        margin: 60px auto;
        text-align: center;
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5rem;
        gap: 2rem;
        li {
            list-style: none;
        }
        li:hover {
            color: ${globalStyles.color.primary};
        }
    }

    .card-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }
`

export const Product = () => {
    return (
        <StyledProduct>
            <div className="container">
                <h2>Produk Populer</h2>
                <ul>
                    <li><Button text="Software Unggulan" color={globalStyles.color.primary} /></li>
                    <li>Kasir & POS</li>
                    <li>Penyedia Hosting</li>
                    <li>Payroll & HRIS</li>
                    <li>Chat Bisnis</li>
                    <li>Toko Online</li>
                </ul>
                <div className="card-wrapper">
                    {dummyData.map(data => <Card key={data.id} data={data} />)}
                </div>
            </div>
        </StyledProduct>
    )
}
