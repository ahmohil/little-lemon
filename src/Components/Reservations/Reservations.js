import ReservationsForm from './ReservationsTable/ReservationsForm';
import './Reservations.css'


function Reservations(props)
{
    return(
        <main className = "reservation-page centred-main">
            <div>
            <h2>Reserve a table</h2>
            <ReservationsForm availableTimes={props.availableTimes} setAvailableTimes ={props.setAvailableTimes} onSubmit = {props.onSubmit}/>
            {console.log(props.times)}
            </div>
        </main>
    )
}


export default Reservations;
