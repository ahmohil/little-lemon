
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import './ReservationsForm.css'
import React, { useState } from 'react';




function ReservationsForm(props) {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
 
    function handleDateChange(event) {
        setSelectedDate(event.target.value);
    }

    function handleTimeChange(event) {
        setSelectedTime(event.target.value);
        console.log(selectedTime);
    }

    const currentDate = new Date().toISOString().split('T')[0];


    return (
        <div className="reservation-form">
            <form>
                <label htmlFor="date-picker">Choose date: </label>
                <input type="date"
                    id="date-picker"
                    name="booking-date"
                    min={currentDate}
                    value={currentDate}
                    onChange={handleDateChange}
                />

                <label htmlFor='reservation-time'>Chose time: </label>
                <select id='reservation-time' value={selectedTime} onChange={handleTimeChange}>
                    <option value=''>Select a time</option>
                    {
                        props.times.map((t)=>(
                            <option key={t} value={t}> 
                                {t}
                            </option>
                        ))
                    }
                </select>

                <label htmlFor='guests'>Number of guests: </label>
                <input type="number"
                    placeholder='1'
                    min='1'
                    max='10'
                    id='guests'
                />

                <label htmlFor='occasion'>Occasion: </label>
                <select id='occasion'>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input type='submit' value="Make Your Reservation" className='submit-button' />
            </form>
        </div>
    )
}


export default ReservationsForm;
