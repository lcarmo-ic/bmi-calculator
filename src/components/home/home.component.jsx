import React, { Fragment } from "react";
import BMIForm from "../bmi-form/bmi-form.component";
import BMIDisplay from "../bmi-display/bmi-display.component";
import {TitleContainer, Title, BMIInfoContainer, BMIFormContainer, ScreenGrid, BMIInfoGrid} from "./home.styles.jsx"
import BmiError from "../bmi-error/bmi-error.component";
import { useSelector } from "react-redux";
import { GlobalStyle } from '../../global-style.styles';
import { selectBmiCategory } from "../../redux/slices/bmiSlice";
import BMICategory from "../bmi-category/bmi-category.component";

const Home = () => {
    const category = useSelector(selectBmiCategory);

    return (
        <Fragment>
            <GlobalStyle category={category} isBlog={false}/>
            <ScreenGrid>
                <TitleContainer>
                    <Title category={category} >BMI Calculator</Title>
                </TitleContainer>
                <BMIInfoContainer>
                    <BMIInfoGrid>
                        <BMIDisplay></BMIDisplay>
                        <BMICategory></BMICategory>
                    </BMIInfoGrid>
                </BMIInfoContainer>
                <BMIFormContainer>
                    <BMIForm></BMIForm>
                </BMIFormContainer>
            </ScreenGrid>
            <BmiError></BmiError>
        </Fragment>
    )
}

export default Home;