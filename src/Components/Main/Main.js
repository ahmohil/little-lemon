import Hero from '../Hero/Hero';
import Highglights from '../Highlights/Highlights';
import Testimonials from '../Testimonials/Testimonials';
import BookingConfirmed from '../BookingConfirmed/BookingConfirmed';
import About from '../About/About';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Reservations from '../Reservations/Reservations';
import React, {useReducer, useState} from 'react';
import {fetchAPI, submitAPI}from '../../api';
import Menu from '../Menu/Menu'

function Main(){
    
    const updateTimes = (state,action) =>{
        const date = new Date(action.selectedDate);
        return fetchAPI(date);
    };

    const navigate = useNavigate();

    const initializeTimes = ()=>{
        const today = new Date();
        const availabeTimes = fetchAPI(today);
        return availabeTimes;
    };

    const handleSubmit = (formData)=>{
        submitAPI(formData) && navigate('/booking-confirmation' , {state: formData});

    }
    const [state,dispatch] = useReducer(updateTimes, initializeTimes());

    
    return(
        <main>
            <Routes>
                <Route path='/little-lemon' element = { <><Hero /> <Highglights /></>} />
                <Route path = '/about' element = {<>   <Testimonials /> <About /></>} />
                <Route path = '/booking' element = { <Reservations availableTimes={state} setAvailableTimes={dispatch} onSubmit = {handleSubmit}/> } />
                <Route path = '/booking-confirmation' element = {<BookingConfirmed/>}/>
                <Route path = '/menu' element={<Menu/>}/>
            </Routes>
        </main>
    )
}


export default Main;