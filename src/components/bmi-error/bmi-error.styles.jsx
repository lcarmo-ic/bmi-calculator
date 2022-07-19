import styled from 'styled-components'

export const ErrorLabelHeight = styled.label`
    position: fixed;
    padding: 10px 0;
    width: 44vw;
    left: 5.1vw;
    top: 76vh;
    max-height: 1.2em;
    background-color: rgb(230, 216, 216);;
    border-radius: 10px;
    color: rgb(231, 137, 93);
    font-size: 1.5vw;

    @media screen and (max-width: 800px) {
        display: block;
        height: 2vh;
        top: 77vh;
        width: 95vw;
        position: absolute;
        left: 2.5vw;
        bottom: auto;
        font-size: 2vh;
        z-index: 101;
    }
`

export const ErrorLabelWeight = styled.label`
    position: fixed;
    padding: 10px 0;
    width: 44vw;
    left: 51vw;
    top: 76vh;
    max-height: 1.2em;
    background-color: rgb(230, 216, 216);;
    border-radius: 10px;
    color: rgb(231, 137, 93);
    font-size: 1.5vw;

    @media screen and (max-width: 800px) {
        display: block;
        height: 2vh;
        top: 77vh;
        width: 95vw;
        position: absolute;
        left: 2.5vw;
        bottom: auto;
        font-size: 2vh;
        z-index: 100;
    }
`