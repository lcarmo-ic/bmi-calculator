import styled from 'styled-components'
import { handleTextColorByCategory } from '../../utils/utils'

export const BMIContainer = styled.div`
    display: inline-block;
    width: 100vw;
    height: 45vh;
    position: relative;
`

export const BMIValue = styled.label`
    width: 100vw;
    color: ${({ category }) => handleTextColorByCategory(category)};
    font-size: 15vw;
    position: absolute;
    left: 0vw;
    bottom: 2vh;

    @media screen and (max-width: 800px) {
        font-size: 30vw;
    }
`