import { CATEGORIES } from '../redux/slices/bmiSlice'

export const squared = (n) => {
    return n*n;
}

export const handleTextColorByCategory = (category) => {
    switch(category){
        case CATEGORIES.UNDERWEIGHT:
            return `#660115`
        case CATEGORIES.HEALTHY:
            return `#46730a`
        case CATEGORIES.OVERWEIGHT:
            return `#f7eb99`
        case CATEGORIES.OBESE:
            return `#ff8873`
        default:
            return `rgba(0,212,255,1)`
    };
}

export const handleBackgroudColorByCategory = (category) => {
    switch(category){
        case CATEGORIES.UNDERWEIGHT:
            return `linear-gradient(90deg, #f76aba 0%, #b30050 100%);`
        case CATEGORIES.HEALTHY:
            return `linear-gradient(90deg, #b4fa5f 0%, #3b6904 100%);`
        case CATEGORIES.OVERWEIGHT:
            return `linear-gradient(90deg, #edd921 0%, #a18008 100%);`
        case CATEGORIES.OBESE:
            return `linear-gradient(90deg, #e6443e 0%, #8c0a15 100%);`
        default:
            return `linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 100%)`
    };
}

export const handleInputColorByCategory = (category) => {
    switch(category){
        case CATEGORIES.UNDERWEIGHT:
            return `#820539`
        case CATEGORIES.HEALTHY:
            return `#7bb31b`
        case CATEGORIES.OVERWEIGHT:
            return `#c9a928`
        case CATEGORIES.OBESE:
            return `#b31414`
        default:
            return `#0a288a`
    };
}

export const handleIconColorFilter = (category) => {
    switch(category){
        case CATEGORIES.UNDERWEIGHT:
            return `invert(10%) sepia(91%) saturate(3314%) hue-rotate(321deg) brightness(92%) contrast(105%)`
        case CATEGORIES.HEALTHY:
            return `invert(29%) sepia(89%) saturate(946%) hue-rotate(55deg) brightness(92%) contrast(97%)`
        case CATEGORIES.OVERWEIGHT:
            return 'invert(51%) sepia(23%) saturate(4335%) hue-rotate(25deg) brightness(88%) contrast(94%)'
        case CATEGORIES.OBESE:
            return `invert(9%) sepia(64%) saturate(7388%) hue-rotate(350deg) brightness(81%) contrast(97%)`
        default:
            return `#0a288a`
    };
}