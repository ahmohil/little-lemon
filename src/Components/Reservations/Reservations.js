import ReservationsForm from './ReservationsTable/ReservationsForm';
import './Reservations.css'


function Reservations(props)
{
    return(
        <main className = "reservation-page ">
            <h2 className='reservation-heading'>Reserve a table</h2>
            <div className='centred-div'>
            <ReservationsForm availableTimes={props.availableTimes} setAvailableTimes ={props.setAvailableTimes} onSubmit = {props.onSubmit}/>
            {console.log(props.times)}
            </div>
        </main>
    )
}


export default Reservations;
