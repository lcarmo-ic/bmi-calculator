import React from "react";
import Home from '../home/home.component';
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { selectBmiCategory } from '../../redux/slices/bmiSlice';
import BMIRecomendation from '../bmi-recomendations/bmi-recomendation.component';

const RouterComponent = () => {
    const category = useSelector(selectBmiCategory)

    return (
        <BrowserRouter>
            <Routes>
                <Route path={`category/${category}`} element={<BMIRecomendation category={category}/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
)};

export default RouterComponent;