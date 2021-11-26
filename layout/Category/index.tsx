import { List } from "../../components/List"
import categories from '../../public/data/categories'
import styled from "styled-components"

const StyledCategory = styled.div`
    padding: 60px 120px;
    h2 {
        margin: 48px 0;
    }
    .category {
        display: flex;
        flex-wrap: wrap;
        gap: 120px;
        justify-content: space-between;
    }
`

export const Category = () => {
    return (
        <StyledCategory>
            <h2>Jelajahi Kategori Software dan Layanan.</h2>
            <div className="category">
                {categories.map((data => (
                    <List key={data.id} title={data.title} item1={data.item1} item2={data.item2} item3={data.item3} />
                )))}
            </div>
        </StyledCategory>
    )
}
