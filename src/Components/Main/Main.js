import Hero from '../Hero/Hero';
import Highglights from '../Highlights/Highlights';
import Testimonials from '../Testimonials/Testimonials';
import About from '../About/About';
import {Routes, Route} from 'react-router-dom';
import Reservations from '../Reservations/Reservations';
import React, {useReducer, useState} from 'react';
import {fetchAPI, submitAPI}from '../../api';

function Main(){
    
    const updateTimes = (state,action) =>{
        const date = new Date(action.selectedDate);
        return fetchAPI(date);
    };

    const initializeTimes = ()=>{
        const today = new Date();
        const availabeTimes = fetchAPI(today);
        return availabeTimes;
    };

    const [state,dispatch] = useReducer(updateTimes, initializeTimes());

    
    return(
        <main>
            <Routes>
                <Route path='/' element = { <><Hero /> <Highglights /></>} />
                <Route path = '/about' element = {<>   <Testimonials /> <About /></>} />
                <Route path = '/booking' element = { <Reservations availableTimes={state} setAvailableTimes={dispatch} /> } />
            </Routes>
        </main>
    )
}


export default Main;