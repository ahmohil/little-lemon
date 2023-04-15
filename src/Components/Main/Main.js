import Hero from '../Hero/Hero';
import Highglights from '../Highlights/Highlights';
import Testimonials from '../Testimonials/Testimonials';
import About from '../About/About';
import {Routes, Route} from 'react-router-dom';
import Reservations from '../Reservations/Reservations';
import React, {useReducer, useState} from 'react';

function Main(){
    
    function setAvailableTimes(state, action){

    }

    const [state,dispatch] = useReducer(setAvailableTimes, ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

    return(
        <main>
            <Routes>
                <Route path='/' element = { <><Hero /> <Highglights /></>} />
                <Route path = '/about' element = {<>   <Testimonials /> <About /></>} />
                <Route path = '/booking' element = { <Reservations times={state} /> } />
            </Routes>
        </main>
    )
}


export default Main;