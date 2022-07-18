import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import recomendations from "../../assets/recomendations";
import { selectBmi, selectBmiCategory } from "../../redux/slices/bmiSlice";
import { HeaderContainer, HeaderLabel, BlogContainer, CategoryLabel, BlogTitle, BlogSubTitle, ParagraphSubtitle, ParagraphText, BMICalculatorLink } from "./bmi-recomendations.styles";
import { GlobalStyle } from "../../global-style.styles";

const BMIRecomendation = () => {
    const bmi = useSelector(selectBmi)
    const category = useSelector(selectBmiCategory)

    return(
    <Fragment>
        <GlobalStyle category={category} isBlog={true}/>
        <HeaderContainer category={category}>
            <HeaderLabel>Recommendations according to your BMI</HeaderLabel>
        </HeaderContainer>
        <BlogContainer>
            <BlogTitle>
                Your category is: &nbsp;
                <CategoryLabel category={category}>{category}</CategoryLabel>
            </BlogTitle>
            <BlogSubTitle>
                BMI recomendations page - Your BMI:  &nbsp;
                <CategoryLabel category={category}>{bmi}</CategoryLabel>
            </BlogSubTitle>
            {recomendations[category].map(paragraph => (
                <>
                    <ParagraphSubtitle category={category}>{paragraph.subtitle}</ParagraphSubtitle>
                    <ParagraphText>{paragraph.text}</ParagraphText>
                </>
            ))}
        </BlogContainer>
        <BMICalculatorLink category={category} to="/">Go back to calculator</BMICalculatorLink>
    </Fragment>
    )
};

export default BMIRecomendation;