import React from "react";
import { ErrorLabelHeight, ErrorLabelWeight } from './bmi-error.styles'
import { selectIsHeightError, selectIsWeightError } from "../../redux/slices/bmiSlice";
import { useSelector } from "react-redux";

const BmiError = () => {
    const isHeightError = useSelector(selectIsHeightError);
    const isWeightError = useSelector(selectIsWeightError);

    return (
        <>
            {
                isHeightError
                ? 
                (<ErrorLabelHeight>
                    Height has to be between 0m - 3m
                </ErrorLabelHeight>)
                : 
                (<></>)
            }
            {
                isWeightError
                ? 
                (<ErrorLabelWeight>
                    Weight has to be between 0kg - 700kg
                </ErrorLabelWeight>)
                : 
                (<></>)
            }
        </>
    )
}

export default BmiError;