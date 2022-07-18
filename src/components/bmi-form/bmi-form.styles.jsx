import styled from 'styled-components'
import { handleTextColorByCategory, handleInputColorByCategory } from '../../utils/utils'

export const CustomInput = styled.input`
    line-height: 75px;
    font-size: 50px;
    color: #ffffff;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    background: ${({category}) => handleInputColorByCategory(category)};
    // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgb(15, 100, 117) 100%);
    border: none;
    border-radius: 10px;
    outline: none;
    text-align: center;

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({category}) => handleTextColorByCategory(category)};
        opacity: 0.5; /* Firefox */
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
`

export const FormContainer = styled.div`
    position: fixed;
    width: 90vw;
    margin: 10px auto;
    left: 5.1vw;
    bottom: 0px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
`