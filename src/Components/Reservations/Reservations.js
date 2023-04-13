import ReservationsForm from './ReservationsTable/ReservationsForm';
import './Reservations.css'


function Reservations()
{
    return(
        <div className = "reservation-page">
            <h2>Reserve a table</h2>
            <ReservationsForm/>
        </div>
    )
}


export default Reservations;
