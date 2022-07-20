import styled from 'styled-components'
import { Link } from "react-router-dom";
import { handleBackgroudColorByCategory, handleInputColorByCategory } from '../../utils/utils'

export const HeaderContainer = styled.div`
    display: inline-block;
    background: ${({ category }) => handleBackgroudColorByCategory(category)};
    min-width: 100%;
    min-height: 140px;
    top: 0;
    padding-top: 60px;
    margin:0;
`

export const HeaderLabel = styled.label`
    color: white;
    font-size: 48px;

    @media screen and (max-width: 800px) {
        font-size: 10vw;
    }
`

export const BlogContainer = styled.div`
    background: #FAF9FE;
    width: 60%; 
    height: 100%;
    position: relative;
    margin-left: 20%;
    padding: 0px 15px 20px 15px;
    text-align: left;
`

export const BlogTitle = styled.h1`
 color: black 65%;   
 padding-top: 15px;
 margin-bottom: 45px;

 @media screen and (max-width: 800px) {
        font-size: 6vw;
    }
`

export const CategoryLabel = styled.label`
 color: ${({ category }) => handleInputColorByCategory(category)};
`

export const BlogSubTitle = styled.h2`
    color: black 45%;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 35px;

    @media screen and (max-width: 800px) {
        font-size: 6vw;
    }
`
export const ParagraphSubtitle = styled.h3`
    color: ${({ category }) => handleInputColorByCategory(category)};
    @media screen and (max-width: 800px) {
        font-size: 5vw;
    }
`

export const ParagraphText = styled.p`
    color: black;
    @media screen and (max-width: 800px) {
        font-size: 4vw;
    }
`

export const BMICalculatorLink = styled(Link)`
    display: flex;
    max-width: 11vw;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${({ category }) => handleInputColorByCategory(category)};
    border-radius: 10px;
    text-decoration: none;
    position: sticky;
    left: 0.5vw;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    bottom: 2%;
    color: white;

    @media screen and (max-width: 800px) {
    display: flex;
    max-width: 14vw;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    bottom: 2%;
    font-size: 2vw;
    }
`