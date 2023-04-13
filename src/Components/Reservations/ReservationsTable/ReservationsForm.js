
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import './ReservationsForm.css'
import React, { useState } from 'react';




function ReservationsForm() {
    const [selectedDate, setSelectedDate] = useState('');

    function handleDateChange(event) {
        setSelectedDate(event.target.value);
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
                <select id='reservation-time'>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>

                <label htmlFor = 'guests'>Number of guests: </label>
                <input type = "number"
                placeholder='1'
                min='1'
                max = '10'
                id = 'guests'
                />

                <label htmlFor = 'occasion'>Occasion: </label>
                <select id='occasion'>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input type='submit' value="Make Your Reservation" className='submit-button'/>
            </form>
        </div>
    )
}


export default ReservationsForm;
