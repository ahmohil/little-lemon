
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import './ReservationsForm.css'
import React,{useState} from 'react';

function DatePicker(){
    const[selectedDate, setSelectedDate] = useState('');
}

function handleDateChange(event){
    setSelectedDate(event.target.value);
}

const currentDate = new Date().toISOString().split('T')[0];


function ReservationsForm()
{
    return(
        <div className = "reservation-form">
            <form>
                <label htmlFor = "date-picker">Select a date: </label>
                <input type="date"
                 id="date-picker"
                 name="booking-date"
                 min = {currentDate}
                 value={currentDate}
                 onChange={handleDateChange}
                 />
            </form>
        </div>
    )
}


export default ReservationsForm;
