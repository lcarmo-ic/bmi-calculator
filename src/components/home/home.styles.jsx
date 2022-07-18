import styled from 'styled-components'
import { handleTextColorByCategory } from '../../utils/utils'

export const Title = styled.label `
    font-weight: 100;
    font-size: 80px;
    padding-top: 50px;
    color: ${({category}) => handleTextColorByCategory(category)};
`