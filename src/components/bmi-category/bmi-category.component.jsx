import React from "react";
import { useSelector } from "react-redux";
import { selectBmiCategory, CATEGORIES } from "../../redux/slices/bmiSlice";
import { CategoryContainer, CategoryLink, RedirectIcon } from "./bmi-category.styles"
import redirectIcon from "../../assets/redirect_icon.svg"

const BMICategory = () => {
    const category = useSelector(selectBmiCategory); 

    return(
        <CategoryContainer>
            <CategoryLink category={category} to={`/category/${category}`} >
                {category === CATEGORIES.UNSET ? "" : category}
                {category === CATEGORIES.UNSET ? <></> : <RedirectIcon src={redirectIcon} alt="Read More" category={category}></RedirectIcon>}
            </CategoryLink>
        </CategoryContainer>
    )
}

export default BMICategory