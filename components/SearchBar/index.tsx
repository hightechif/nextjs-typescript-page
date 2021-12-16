import React from 'react'
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import globalVariables from '../../styles/globalVariables'

const StyledSearch = styled.div`
    align-items: center;
    border: 1px solid;
    border-color: ${globalVariables.color.border};
    border-radius: 15px;
    padding-left: 15px;
    max-width: 450px;
    .icon {
        color: ${globalVariables.color.soft_gray};
        width: 16px;
    }
`

const StyledInput = styled.input`
    border: none;
    border-radius: 15px;
    width: 400px;
    padding: 10px;
    color: ${globalVariables.color.gray};
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${globalVariables.color.soft_gray};
    }
    @media screen and (max-width: 767px) {
        width: 250px;
        height: 55px;
        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            white-space:pre-line;  
            position:relative;
            top:-10px;
        }
        ::-moz-placeholder { /* Firefox 19+ */
            white-space:pre-line;  
            position:relative;
            top:-10px;
        }
        :-ms-input-placeholder { /* IE 10+ */
            white-space:pre-line;  
            position:relative;
            top:-10px;
        }
        :-moz-placeholder { /* Firefox 18- */
            white-space:pre-line;  
            position:relative;
            top:-10px;
        }
    }
`

interface Props {
    placeholder: string
    keyword?: () => void
}

export const SearchBar: React.FC<Props> = (props) => {
    return (
        <StyledSearch>
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <StyledInput type="text" placeholder={`${props.placeholder}`} name="search" />
        </StyledSearch>
    )
}
