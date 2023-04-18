import { useLocation } from 'react-router-dom';
import './BookingConfirmed.css'


function BookingConfirmed(props){

    const location = useLocation();
    const formData = location.state;

    return(
        <main className='centered-main'>
            <div className='receipt'>
            <h2>
                Your booking has been confirmed.
            </h2>
                <div className='booking-details'>
                <div>
                <div className='detail'>
                <h3><strong>Date:</strong> </h3> <h3> {formData.selectedDate}</h3>
                </div>
                <div className='detail'>
                <h3><strong>Time:</strong> </h3> <h3> {formData.selectedTime}</h3>
                </div>
                <div className='detail'>
                <h3><strong>Occasion:</strong> </h3> <h3> {formData.occasion}</h3>
                </div>
                <div className='detail'>
                <h3><strong>No. of Guests:</strong> </h3> <h3> {formData.guests}</h3>
                </div>
                </div>
                </div>
            </div>
        </main>
    )
}


export default BookingConfirmed;
