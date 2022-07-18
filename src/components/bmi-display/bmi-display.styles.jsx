import styled from 'styled-components'
import { handleTextColorByCategory } from '../../utils/utils'

export const BMIContainer = styled.div`
    text-align: center;
    margin-top: 18vh;
`

export const BMIValue = styled.label`
    position: flex;
    color: ${({ category }) => handleTextColorByCategory(category)};
    font-size: 190px;
`