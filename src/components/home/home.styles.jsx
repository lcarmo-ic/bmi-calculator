import styled from 'styled-components'
import { handleTextColorByCategory } from '../../utils/utils'

export const TitleContainer = styled.div `
    top: 0;
    left: 0;
    height: 15vh;
`

export const Title = styled.label `
    font-weight: 100;
    font-size: 80px;
    width: 100%;
    padding-top: 50px;
    color: ${({category}) => handleTextColorByCategory(category)};

    @media screen and (max-width: 800px) {
        font-size: 10vw;
    }
`

export const BMIInfoContainer = styled.div`
    width: 100%;
    height: 65vh;
    position: relative;
`

export const BMIFormContainer = styled.div`
    width: 100%;
    height: 20vh;
`

export const ScreenGrid = styled.div`
    display: grid;
    grid-template-columns: 15fr, 65fr, 20fr;
    grid-gap: 0px;
`

export const BMIInfoGrid = styled.div`
    display: grid;
    height: 65vh;
    position: relative;
    grid-template-rows: 45fr, 20fr;
    grid-gap: 0px;
`