import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = {
    UNDERWEIGHT: "Underweight",
    HEALTHY: "Healthy",
    OVERWEIGHT: "Overweight",
    OBESE: "Obese",
    UNSET: "Unset"
}

const initialState = {
    height: '',
    weight: '',
    bmi: 0,
    isHeightError: false,
    isWeightError: false
};

export const bmiSlice = createSlice({
    name: 'bmi',
    initialState,
    reducers: {
        setHeight: (state, action) => {
            state.height = action.payload;
        },
        setWeight: (state, action) => {
            state.weight = action.payload;
        },
        setBmi: (state, action) => {
            state.bmi = action.payload;
        },
        toggleIsHeightError: state => {
            state.isHeightError = !state.isHeightError
        },
        toggleIsWeightError: state => {
            state.isWeightError = !state.isWeightError
        }
    }
});

export const { 
    setHeight,
    setWeight,
    setBmi,
    toggleIsHeightError,
    toggleIsWeightError
} = bmiSlice.actions


export const selectHeight = state => state.bmi.height

export const selectWeight = state => state.bmi.weight

export const selectBmi = state => state.bmi.bmi

export const selectIsHeightError = state => state.bmi.isHeightError;

export const selectIsWeightError = state => state.bmi.isWeightError;

export const selectBmiCategory = state => {
    const bmi = state.bmi.bmi;
    const isHeightError = state.bmi.isHeightError;
    const isWeightError = state.bmi.isWeightError;

    if(isHeightError || isWeightError) {
        return CATEGORIES.UNSET;
    }

    switch(true){
        case (bmi === 0):
            return CATEGORIES.UNSET;
        case (bmi < 18.5):
            return CATEGORIES.UNDERWEIGHT;
        case (bmi < 25):
            return CATEGORIES.HEALTHY;
        case (bmi < 30):
            return CATEGORIES.OVERWEIGHT;
        case (bmi >= 30):
            return CATEGORIES.OBESE;
        default:
            return CATEGORIES.UNSET;

    }
}

export default bmiSlice.reducer