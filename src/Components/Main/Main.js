import Hero from '../Hero/Hero';
import Highglights from '../Highlights/Highlights';
import Testimonials from '../Testimonials/Testimonials';
import About from '../About/About';
import {Routes, Route} from 'react-router-dom';
import Reservations from '../Reservations/Reservations';

function Main(){
    return(
        <main>
            <Routes>
                <Route path='/' element = { <><Hero /> <Highglights /></>} />
                <Route path = '/about' element = {<>   <Testimonials /> <About /></>} />
                <Route path = '/booking' element = { <Reservations /> } />
            </Routes>
        </main>
    )
}


export default Main;