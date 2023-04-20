
import { isDisabled, setSelectionRange } from '@testing-library/user-event/dist/utils';
import './ReservationsForm.css'
import React, { useState } from 'react';




function ReservationsForm(props) {
    const currentDate = new Date().toISOString().split('T')[0];


    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [selectedTime, setSelectedTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    function handleDateChange(event) {
        setSelectedDate(event.target.value);
        props.setAvailableTimes({ selectedDate: selectedDate });
    }

    function handleTimeChange(event) {
        setSelectedTime(event.target.value);
        console.log(selectedTime);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit({
            selectedDate,
            selectedTime,
            occasion,
            guests
        })

    }


    return (
        <div className="reservation-form">
            <form onSubmit={handleSubmit} >
                <label htmlFor="date-picker">Choose date: </label>
                <input type="date"
                    id="date-picker"
                    name="booking-date"
                    min={currentDate}
                    value={selectedDate}
                    onChange={handleDateChange}
                />
                {console.log(selectedTime)}
                <label htmlFor='reservation-time'>Chose time: </label>
                <select id='reservation-time' value={selectedTime} onChange={handleTimeChange} required>
                    <option value=''>Select a time</option>
                    {
                        props.availableTimes.map((t) => (
                            <option key={t} value={t}>
                                {t}
                            </option>
                        ))

                    }
                </select>

                <label htmlFor='guests'>Number of guests: </label>
                <input type="number"
                    required
                    placeholder='1'
                    min='1'
                    max='10'
                    id='guests'
                    name='guests'
                    value={guests}
                    onChange={(e) => {
                        setGuests(e.target.value)
                    }}
                />

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required>
                    <option value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                </select>

                <input type='submit' value="Make Your Reservation" className='submit-button btn'  />
            </form>
        </div>
    )
}


export default ReservationsForm;
