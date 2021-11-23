import styled from "styled-components";

const StyledHeader = styled.header`
    background: #FFFEFE;
    border: 1px gray;
    box-shadow: 0px 2px 2px 0px rgba(173, 181, 189, 0.16);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 120px;

    width: 100%;
    height: 88px;
`

export const Header = () => {
    return (
        <StyledHeader>
            This is header section
        </StyledHeader>
    )
}
