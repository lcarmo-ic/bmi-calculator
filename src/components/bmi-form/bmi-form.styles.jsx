import styled from 'styled-components'
import { handleTextColorByCategory, handleInputColorByCategory } from '../../utils/utils'

export const CustomInput = styled.input`
    line-height: 75px;
    font-size: 50px;
    height: 90px;
    width: 100%;
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

    @media screen and (max-width: 800px) {
        line-height: 100%;
        font-size: 5vw;
        height: 100%;
        grid-template-rows: repeat(2, 1fr);
        min-width: 0%;
        width: auto;
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const FormContainer = styled.div`
    width: 90vw;
    height: 15vh;
    position: relative;
    top: 50%;
    margin-top: -7.5vh;
    left: 5vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 800px) {
        display: grid;
        width: 100%;
        min-width: 0;
        left: 0;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 10%;
        position: relative;
        top: 50%;
        margin-top: -7.5vh;
    }
`