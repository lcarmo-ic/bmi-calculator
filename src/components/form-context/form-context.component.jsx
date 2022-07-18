import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext)
}

export const FormProvider = ({ children }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    return (
        <FormContext.Provider value={{height, weight, setHeight, setWeight}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider;