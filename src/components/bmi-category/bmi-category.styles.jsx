import styled from 'styled-components'
import { Link } from "react-router-dom";
import { handleTextColorByCategory, handleIconColorFilter } from '../../utils/utils'

export const CategoryContainer = styled.div`
    height: 20vh;
    width: 100%;
    position: relative;
    top: 0;

    @media screen and (max-width: 800px) {
        top: 0;
    }
`

export const CategoryLink = styled(Link)`
    position: flex;
    color: ${({ category }) => handleTextColorByCategory(category)};
    font-size: 3vw;
    text-decoration: none;

    @media screen and (max-width: 800px) {
        font-size: 5vw;
    }
`

export const RedirectIcon = styled.img`
    height: 20px;
    width: 20px;
    margin-left: 7px;
    transform: translateY(1px);
    filter: ${({ category }) => handleIconColorFilter(category)};
`