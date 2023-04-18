import ReservationsForm from './ReservationsTable/ReservationsForm';
import './Reservations.css'


function Reservations(props)
{
    return(
        <div className = "reservation-page">
            <main>
            <h2>Reserve a table</h2>
            <ReservationsForm availableTimes={props.availableTimes} setAvailableTimes ={props.setAvailableTimes} onSubmit = {props.onSubmit}/>
            {console.log(props.times)}
            </main>
        </div>
    )
}


export default Reservations;
