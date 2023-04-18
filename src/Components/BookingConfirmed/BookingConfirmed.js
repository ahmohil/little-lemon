import { useLocation } from 'react-router-dom';
import './BookingConfirmed.css'


function BookingConfirmed(props){

    const location = useLocation();
    const formData = location.state;

    return(
        <main>
            <h2>
                Your booking has been confirmed. Details are as follows
                <h3><strong>Date:</strong> formData.date</h3>
                selectedDate,
            selectedTime,
            occasion,
            guests
            </h2>
        </main>
    )
}


export default BookingConfirmed;
