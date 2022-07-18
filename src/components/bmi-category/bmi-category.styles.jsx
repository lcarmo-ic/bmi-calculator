import styled from 'styled-components'
import { Link } from "react-router-dom";
import { handleTextColorByCategory, handleIconColorFilter } from '../../utils/utils'

export const CategoryContainer = styled.div`
    text-align: center;
`

export const CategoryLink = styled(Link)`
    position: flex;
    color: ${({ category }) => handleTextColorByCategory(category)};
    font-size: 30px;
    text-decoration: none;
`

export const RedirectIcon = styled.img`
    height: 20px;
    width: 20px;
    margin-left: 7px;
    transform: translateY(1px);
    filter: ${({ category }) => handleIconColorFilter(category)};
`