import { Fragment, React } from "react";
import "./bmi-form.styles.jsx"
import {CustomInput, FormContainer } from "./bmi-form.styles"
import { useDispatch, useSelector } from "react-redux";
import { setHeight, setWeight, selectHeight, selectWeight, toggleIsHeightError, toggleIsWeightError, selectIsHeightError, selectIsWeightError, selectBmiCategory } from '../../redux/slices/bmiSlice'

const BMIForm = () => {
    const height = useSelector(selectHeight)
    const weight = useSelector(selectWeight)
    const isHeightError = useSelector(selectIsHeightError)
    const isWeightError = useSelector(selectIsWeightError)
    const category = useSelector(selectBmiCategory)
    const dispatch = useDispatch();

    const heightPattern= new RegExp(/^(\d{1}\.\d?\d?)$/g);
    const weightPattern= new RegExp(/^(\d{1,3}\.?\d?\d?)$/g);
    
    const onHeightChange = (event) => {
        const newHeight = 
            event.target.value.length === 1
            ? 
            height.length === 2 ? "" : event.target.value.concat('.') 
            : 
            event.target.value
            
        if(!newHeight || heightPattern.test(newHeight)){
            dispatch(setHeight(newHeight.slice(0,4)));
        }
        
        if(newHeight && (newHeight <= 0 || newHeight >= 3) && !isHeightError){
            dispatch(toggleIsHeightError())
        }else if(newHeight && newHeight > 0 && newHeight < 3 && isHeightError) {
            dispatch(toggleIsHeightError())
        } else if (!newHeight && isHeightError){
            dispatch(toggleIsHeightError())
        } else if (newHeight && (newHeight <= 0 || newHeight >= 3) && isHeightError){
            return
        }
    }

    const onWeightChange = (event) => {
        const newWeight = 
            event.target.value.length === 3 && !event.target.value.includes('.')
            ? 
            weight.length === 4 ? weight.slice(0,3) : event.target.value.concat('.')
            : 
            event.target.value

        if(!newWeight || weightPattern.test(newWeight)){
            dispatch(setWeight(newWeight.slice(0,6)));
        }

        if(newWeight && (newWeight <= 0 || newWeight >= 700) && !isWeightError){
            dispatch(toggleIsWeightError())
        }else if(newWeight && newWeight > 0 && newWeight < 700 && isWeightError) {
            dispatch(toggleIsWeightError())
        } else if (!newWeight && isWeightError){
            dispatch(toggleIsWeightError())
        } else if (newWeight && (newWeight <= 0 || newWeight >= 700) && !isWeightError) {
            return
        }
    }

    return (
    <Fragment>
        <FormContainer>
            <CustomInput 
                autoComplete="off" 
                type="text" 
                required 
                step="0.01" 
                min="0.10" 
                max="3" 
                placeholder='height (m)' 
                value={height}
                category={category}
                onChange={onHeightChange}>
            </CustomInput>
            <CustomInput 
                autoComplete="off" 
                type="text" 
                required 
                step="0.01" 
                min="2" 
                max="700"
                placeholder='weight (kg)' 
                value={weight} 
                category={category}
                onChange={onWeightChange}>
            </CustomInput>
        </FormContainer>
    </Fragment>
    )
}

export default BMIForm;