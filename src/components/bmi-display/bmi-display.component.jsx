import React, {useEffect} from "react";
import {squared} from "../../utils/utils"
import {BMIContainer, BMIValue} from "./bmi-display.styles.jsx"
import { useDispatch, useSelector } from "react-redux";
import { setBmi, selectBmi, selectHeight, selectWeight, selectBmiCategory } from '../../redux/slices/bmiSlice'


const BMIDisplay = () => {
    const height = useSelector(selectHeight);
    const weight = useSelector(selectWeight);
    const bmi = useSelector(selectBmi);
    const category = useSelector(selectBmiCategory);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(height && weight) {
            dispatch(setBmi((weight/squared(height)).toFixed(2)))
        }else {
            dispatch(setBmi(0))
        }
    }, [height, weight, dispatch])

    return (
            <BMIContainer>
                {((height && (height <= 0 || height >= 3)) || (weight && (weight <= 0 || weight >= 700))) ? 
                    (<BMIValue>0</BMIValue>): <BMIValue category={category}>{bmi}</BMIValue>}
            </BMIContainer>
    )
}

export default BMIDisplay;